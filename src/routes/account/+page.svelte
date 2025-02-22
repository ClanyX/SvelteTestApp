<script lang="ts">
    import type { User } from '$lib/database';
  
    let users: User[] = [];
  
    // Načtení seznamu uživatelů
    async function loadUsers() {
      const res = await fetch('/api/users');
      users = await res.json();
    }
  
    // Přidání nového uživatele
    async function addUser() {
      const name = prompt("Zadej jméno:");
      if (!name) return;
  
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
  
      loadUsers();
    }
  </script>
  
  <h1>Seznam uživatelů</h1>
  <button class="butonapp" on:click={loadUsers}>Načíst uživatele</button>
  <button class="butonapp"   on:click={addUser}>Přidat uživatele</button>
  
  <ul>
    {#each users as user}
      <li>{user.id}: {user.name}</li>
    {/each}
  </ul>
  