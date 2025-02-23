<script lang="ts">
    import type { User } from '$lib/server/database';

    let users: User[] = $state([]);

    // Načtení seznamu uživatelů
    $effect(() => {
        loadUsers();
    });

    async function loadUsers() {
        const res = await fetch('/api/users');
        users = await res.json();
    };

    // Přidání nového uživatele
    async function addUser() {
      const name = prompt('Zadejte jméno uživatele');
      const lastname = prompt('Zadejte příjmení uživatele');
      const age = prompt('Zadejte vek uživatele');
      const telephone = prompt('Zadejte telefon uživatele');
  
      if (!name || !lastname || !age || !telephone) return;
  
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, lastname, age: Number(age), telephone }),
      });
  
      loadUsers();
    }
  </script>
  
  <h1>Seznam uživatelů</h1>
  <button class="butonapp" onclick={addUser}>Přidat uživatele</button>
  
  <ul>
    {#each users as user}
      <li>{user.id}: Name: {user.name} | Lastname: {user.lastname} | Age: {user.age} | Telephone: {user.telephone}</li>
    {/each}
  </ul>
  