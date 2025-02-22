import type { RequestEvent } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { User } from '$lib/server/database';

// GET: Vrátí seznam všech uživatelů
export async function GET() {
  const stmt = db.prepare("SELECT * FROM users");
  const users = stmt.all() as User[];

  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' }
  });
}

// POST: Přidá nového uživatele
export async function POST({ request }: RequestEvent) {
  const { name } = await request.json();

  if (!name) {
    return new Response(JSON.stringify({ error: 'Jméno je povinné' }), { status: 400 });
  }

  const stmt = db.prepare("INSERT INTO users (name) VALUES (?)");
  stmt.run(name);

  return new Response(JSON.stringify({ message: 'Uživatel přidán!' }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
