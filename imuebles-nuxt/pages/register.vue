<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-900">
    <div class="md:w-[30rem]">
      <form @submit.prevent="register" class="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-gray-200 mb-4 text-2xl font-semibold">
          Formulario de Registro
        </h2>
        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input v-model="form.name"
            class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" placeholder="Maria" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="apellido_paterno">
            Apellido Paterno
          </label>
          <input v-model="form.apellido_paterno"
            class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="apellido_paterno" type="text" placeholder="Villa" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="apellido_materno">
            Apellido Materno
          </label>
          <input v-model="form.apellido_materno"
            class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="apellido_materno" type="text" placeholder="Juarez" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="email">
            Email Address
          </label>
          <input v-model="form.email"
            class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="text" placeholder="joedoe1234@email.com" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="**********" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="cpassword">
            Confirm Password
          </label>
          <input v-model="form.password"
            class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="**********" />
        </div>

        <button
          class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Submit
        </button>

        <a class="mt-3 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Already have an account? Login.
        </a>
      </form>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  name: "",
  apellido_paterno: "",
  apellido_materno: "",
  email: "",
  password: ""
});

definePageMeta({
  layout: 'login'
})

function register() {
  const { data: user } = useFetch('http://localhost:8000/api/v1/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: form.name,
      apellido_paterno: form.apellido_paterno,
      apellido_materno: form.apellido_materno,
      email: form.email,
      password: form.password
    })
  })

  navigateTo("/login");
}
</script>