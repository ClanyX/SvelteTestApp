import Database from 'better-sqlite3';

export interface User {
  id: number;
  name: string;
}

const db = new Database('database.sqlite');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )
`);

export default db;
