<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import type { User } from "$lib/server/database";
  import UserCard from "$lib/components/UserCard.svelte";

  let users: User[] = $state([]);

  // Načtení seznamu uživatelů
  $effect(() => {
    loadUsers();
  });

  async function loadUsers() {
    const res = await fetch("/api/users");
    users = await res.json();
  }

  // Přidání nového uživatele
  async function addUser() {
    const name = prompt("Zadejte jméno uživatele");
    const lastname = prompt("Zadejte příjmení uživatele");
    const age = prompt("Zadejte vek uživatele");
    const telephone = prompt("Zadejte telefon uživatele");

    if (!name || !lastname || !age || !telephone) return;

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, lastname, age: Number(age), telephone }),
    });

    if (res.ok) {
      users = await res.json();
    }
  }
</script>

<div class="flex flex-col items-center mt-2">
  <h1 class="font-bold text-2xl">Seznam uživatelů</h1>
  <button class="butonapp m-4" onclick={addUser}>Přidat uživatele</button>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each users as user}
      <div class="mb-4">
        <UserCard {user} />
      </div>
    {/each}
  </div>
</div>