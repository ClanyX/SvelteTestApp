<script>
    export let user = {
        name: 'name',
        lastname: 'lastname',   
        age: 0,
        telephone: '0000',
    }
</script>

<div class="max-w-sm mx-auto bg-blue-700 rounded-2xl shadow-md shadow-gray-400 overflow-hidden p-6">
    <div class="flex items-center space-x-4 text-gray-200 test-lg">
        <h1 class="font-bold text-2xl">User</h1>
        <div class="h-15 w-[2px] bg-gray-300"></div>
        <h3>{user.name} {user.lastname}</h3>
        <p>Age: {user.age}</p>
        <p>Telephone: {user.telephone}</p>
    </div>
</div>