CREATE TABLE IF NOT EXISTS topics (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  subtopic TEXT,
  mastery_pct REAL DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  subject TEXT NOT NULL,
  topic_id INTEGER REFERENCES topics(id),
  question_text TEXT NOT NULL,
  answer_text TEXT NOT NULL,
  choices TEXT,
  difficulty INTEGER DEFAULT 1,
  explanation TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sessions (
  id SERIAL PRIMARY KEY,
  session_type TEXT NOT NULL,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  total_questions INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS attempts (
  id SERIAL PRIMARY KEY,
  session_id INTEGER REFERENCES sessions(id),
  question_id INTEGER REFERENCES questions(id),
  user_answer TEXT,
  is_correct INTEGER DEFAULT 0,
  time_spent_sec INTEGER DEFAULT 0,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS errors (
  id SERIAL PRIMARY KEY,
  question_id INTEGER REFERENCES questions(id),
  topic_id INTEGER REFERENCES topics(id),
  question_text TEXT NOT NULL,
  correct_answer TEXT NOT NULL,
  user_answer TEXT NOT NULL,
  subject TEXT NOT NULL,
  subtopic TEXT,
  times_missed INTEGER DEFAULT 1,
  confidence_level INTEGER DEFAULT 1,
  last_seen TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS streaks (
  id SERIAL PRIMARY KEY,
  date TEXT UNIQUE NOT NULL,
  problems_solved INTEGER DEFAULT 0,
  study_time_sec INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS achievements (
  id SERIAL PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  earned_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
