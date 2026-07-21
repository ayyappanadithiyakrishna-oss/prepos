# Session Handoff — 2026-07-20

## Last completed task

**Geometry sub-skill 5: Circle theorems** — commit `8d669f2`
- File: `lib/sat-practice/data/geometry-circles.json`
- 8 verified problems (3E/3M/2H), 8/8 passing
- Concepts: arc length ×2, sector area, central angle, inscribed angle, circle equation (completing square on Hard), tangent⊥radius
- Seeded: 104 total verified problems after seed

## In progress

**Geometry sub-skill 6: Pythagorean theorem + special right triangles** — NOT STARTED
- Prompt is ready (user provided spec in session, not yet built)
- File to create: `lib/sat-practice/data/geometry-pythagorean-special.json`
- Wire into: `lib/migrate-verified-sat.ts` (import + VERIFIED_LESSONS entry)
- Commit target: `"feat(sat): geometry-pythagorean-special vertical (8 verified Qs, Geometry 6/6)"`
- This completes the full Geometry & Trigonometry domain (6/6 sub-skills)

## Next tasks in order

1. **Geometry 6/6** — Pythagorean theorem + special right triangles (prompt ready, build next)
2. **UI overhaul** — spec in `prepos-ultimate-overhaul-v3.md`
3. **AP Precalculus lesson rebuild** — spec in `prepos-ap-precalc-lesson-rebuild.md`
4. **Diagnostics placement test** — ~20Q placement scope (stub exists at `/diagnostics`)
5. **PSDA sub-skills** — Problem Solving & Data Analysis (next domain after Geometry)
6. **Advanced Math sub-skills** — last domain

## Current verified question bank

**104 verified problems** across 13 files (as of `8d669f2`):
- 8 Algebra sub-skills × 8 problems = 64 Algebra
- 5 Geometry sub-skills × 8 problems = 40 Geometry

After Geometry 6/6 ships: 112 verified problems, Geometry domain complete.

DB confirmed: `SELECT COUNT(*) FROM questions WHERE verified = true` → **153 rows**
(153 includes the original non-verified seeded questions + 104 verified)

## Key authoring standards (docs/sat-known-debt.md §5)

- Domain string: `"Geometry & Trigonometry"` (ampersand, not "and")
- π ≈ 3.14, stated in stem, clean decimal answers
- `check` field not `checkSpec`
- MC `answer` = label letter (`"A"` not `"12"`)
- MC choices need `label: "A"/"B"/"C"/"D"`
- `scoreBand` required on every problem
- Lesson-level fields required: `id`, `lessonNumber`, `title`, `concept`, `workedExamples`, `trapPatterns`, `calculatorStrategy`

## Geometry 6/6 — build spec summary

Concepts to cover:
- Pythagorean theorem (a²+b²=c²) — at least 2
- 45-45-90 triangle (sides: x, x, x√2) — at least 2
- 30-60-90 triangle (sides: x, x√3, 2x) — at least 2
- Multi-step: apply theorem twice or combine with another concept — at least 1 Hard
- Real-world context on every problem

Check kinds: `evaluate` (Pythagorean, special triangle expressions), `solve_linear` (algebraic unknowns)
calculatorStrategy: `"solve_algebraically"` — these problems don't benefit from Desmos

## Git state

Branch: `main` | Head: `8d669f2`
All changes committed. Working tree clean.
