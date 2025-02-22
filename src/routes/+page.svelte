<script>
    import { writable, derived } from 'svelte/store';

    let namell = writable('');
    let lastname = writable('');
    let age = writable('');
    let day = writable('');

    let renderText = derived([namell, lastname, age, day], ([$namell, $lastname, $age, $day]) => {
        return [$namell, $lastname, $age.toString(), $day.toString()];
    });
</script>

<form class="text-center text-yellow-500 mt-4">
    <label>
        <input type="text" placeholder="name" bind:value={$namell}>
    </label>
    <label>
        <input type="text" placeholder="lastname" bind:value={$lastname}>
    </label>
    <label>
        <input type="number" placeholder="age" bind:value={$age}>
    </label>
    <label>
        <input type="number" placeholder="day" bind:value={$day}>
    </label>
</form>

<div class="text-center text-green-300 border-3 border-green-300 p-3 w-2xs m-auto mt-2">
    <p>Name: {$renderText[0]}</p>
    <p>Lastname: {$renderText[1]}</p>
    <p>Age: {$renderText[2]}</p>
    <p>Day: {$renderText[3]}</p>
</div>

<div class="justify-center text-center pt-5">
    <button class="butonapp"><a href="/testpage">Test page</a></button>
    <button class="butonapp"><a href="/account">Users</a></button>
</div>