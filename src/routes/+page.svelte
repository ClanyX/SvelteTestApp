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

<form>
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

<div>
    <p>Name: {$renderText[0]}</p>
    <p>Lastname: {$renderText[1]}</p>
    <p>Age: {$renderText[2]}</p>
    <p>Day: {$renderText[3]}</p>
</div>