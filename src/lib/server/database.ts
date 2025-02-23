import Database from 'better-sqlite3';

export interface User {
  id: number;
  name: string;
  lastname: string;
  age: number;
  telephone: string;
}

const db = new Database('src/lib/server/database.sqlite');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    lastname TEXT NOT NULL,
    age INTEGER NOT NULL,
    telephone TEXT NOT NULL
  )
`);

export default db;
