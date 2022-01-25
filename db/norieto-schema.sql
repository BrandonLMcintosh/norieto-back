CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    map JSONB NOT NULL DEFAULT '{}'::JSONB
)