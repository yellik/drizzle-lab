CREATE TABLE Recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255), NOT NULL,
    description TEXT, NOT NULL,
    author_id INTEGER NOT NULL
)