<script>
    export let user = {
        name: 'name',
        lastname: 'lastname',   
        age: 0,
        telephone: '0000',
    };

    let color = setColor();

    function colorCard(){
        const interval = setInterval(() => {
            color = setColor();
        }, 800);
        return () => clearInterval(interval);
    }

    colorCard();

    function setColor(){
        let color = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        return `#${color.toUpperCase()}`;
    }
</script>

<div class="card max-w-sm mx-auto rounded-2xl shadow-md shadow-gray-400 overflow-hidden p-6" style="background-color: {color};">
    <div class="flex items-center space-x-4 text-gray-200 test-lg">
        <h1 class="font-bold text-2xl">User</h1>
        <div class="h-15 w-[2px] bg-gray-300"></div>
        <h3>{user.name} {user.lastname}</h3>
        <p>Age: {user.age}</p>
        <p>Telephone: {user.telephone}</p>
    </div>
</div>

<style>
    .card {
        transition: background-color 1s ease-in-out;
    }
</style>