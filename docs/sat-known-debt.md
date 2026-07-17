# SAT Math — Known Debt & Deferred Specs

Tracked, named debt so it does not silently slide. Two items, both deliberate,
both scoped. Do not treat either as done.

---

## 1. Mastery model — recency/difficulty-weighted, gated (BUILT 2026-07-17)

**Status:** the model below is now implemented and gate-tested.
- Pure function: `lib/mastery-model.ts` (`computeSkillMastery`) — decay + weights + gate.
- DB layer: `lib/mastery-query.ts` (`getSkillMasteries`) — compute-on-read from real
  attempts, excludes `is_test` sessions.
- Exposed via `GET /api/mastery` as `skills[]`. Verified answers no longer touch the
  `+5/−3` counter (`app/api/practice/answer`); legacy content still does.
- Tested: `scripts/test_mastery_model.ts` (`npm run test:mastery`), incl. the negative
  test "20 easy corrects → NOT mastered". Wired into prebuild + pre-commit gates.
- Structural test isolation: `sessions.is_test` excludes test attempts from all mastery.

**Remaining follow-ups (smaller):**
- Wire the SAT Mastery **UI** to render `skills[]` (per-sub-skill bars + mastered badge);
  today the data is exposed but the page still shows the legacy topic bars.
- Decide whether to blend verified sub-skill mastery into the legacy topic bar, or
  migrate the dashboard fully to per-sub-skill (currently kept separate on purpose).
- Optional `skill_mastery` cache table if compute-on-read cost ever matters.
- Backfill was N/A: verified content had no legitimate attempts (only deleted test writes).

<details><summary>Original spec (kept for reference)</summary>

### Current behavior (as shipped)
`topics.mastery_pct` is a single float per **broad topic** (e.g. "Algebra"),
mutated in `app/api/practice/answer/route.ts`: `+5` on a correct answer, `−3` on
wrong, clamped to `[0,100]`. That's it. No sub-skill granularity, no recency, no
difficulty weighting, no rep requirement.

### Why this is a real defect, not a nicety
20 correct answers on the easiest possible item = 100% "mastery." The tool would
tell a student they've mastered Algebra when they've only shown they can do easy
linear equations. That is the exact failure this project exists to prevent
(master-prompt §3: "A student should not be able to fake mastery by getting one
easy question right"). **This debt blocks the "real progress in Mastery that
reflects real retention" definition-of-done.**

### Target model (spec, per **sub-skill** — not broad topic)
Compute a mastery score `M ∈ [0,1]` per `sub_skill` from that sub-skill's attempt
history (we already store every attempt in `attempts`, tagged via the question's
`sub_skill` / `difficulty_band`):

```
M = Σ (wᵢ · outcomeᵢ) / Σ wᵢ

  outcomeᵢ      = 1 if correct else 0
  wᵢ            = recency(ageᵢ) · difficultyWeight(bandᵢ)
  recency(age)  = 0.5 ^ (age_days / HALF_LIFE_DAYS)      # exp decay, HALF_LIFE_DAYS ≈ 14
  difficultyWeight = { Easy: 1.0, Medium: 1.6, Hard: 2.4 }
```

Recent attempts dominate; harder items count more (a Hard correct is worth more
than an Easy correct; a Hard miss hurts more).

### "Mastered" gate (the anti-fake rule)
A sub-skill is **mastered** only if ALL hold, within the recency window:
- `M ≥ 0.85`, AND
- `≥ 4` distinct correct reps, AND
- correct reps span `≥ 2` difficulty bands including `≥ 1` Hard.

This makes one lucky guess — or a pile of easy grinding — insufficient by
construction.

### Schema / implementation notes
- Granular data already exists (`attempts` + `questions.sub_skill` /
  `difficulty_band`). Start with **compute-on-read** (join + fold in the
  `/api/mastery` route) — no new table needed for v1.
- If read cost matters later, add a `skill_mastery(sub_skill, m_score, reps,
  bands_seen, last_computed)` cache table; recompute on each answer.
- Retire the `+5/−3` mutation once compute-on-read lands. Keep `topics.mastery_pct`
  as a rolled-up average of its sub-skills for the existing dashboard, or migrate
  the dashboard to per-sub-skill.

### Sequencing
Content authoring (more sub-skills) is independent of this and may proceed in
parallel. **This model must be built before "Mastery" is claimed done, and the
spec above must be honored before scaling to a second domain** so the fix doesn't
get lost.

</details>

---

## 2. Diagnostics = short placement test (KNOWN-TEMPORARY, by design)

### Decision
Build a **~15-question placement test**, not the full 44-question,
section-adaptive simulation — *for now, on purpose*.

### Why temporary-on-purpose
A correctly-weighted, section-adaptive 44-Q diagnostic is only meaningful once
there's real content across all four domains. Today: 1 of ~8 Algebra sub-skills
exists; Advanced Math / PSDA / Geometry are empty. A full adaptive diagnostic now
would draw most questions from domains that don't exist — a placeholder wearing a
diagnostic's clothes. The placement test seeds initial per-domain mastery
estimates from whatever content exists at the time, honestly.

### Design constraint (so it's swap-ready without a migration)
Use the **same tagging already in place** — `domain`, `sub_skill`,
`difficulty_band` on every question, verified answer keys. The placement test is
just a smaller sample over the same schema. Swapping in the full 44-Q adaptive
version later must require **no schema migration**, only a different sampling +
scoring policy.

### Guardrail
Do **not** let "placement test" quietly become the permanent diagnostic. When all
four domains have real content, revisit and build the full weighted adaptive
version. Until then this is explicitly incomplete.
