<template>
  <form @submit.prevent="register">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <input v-model="form.name" class="form-control" placeholder="Name" required>

    <input v-model="form.apellido_paterno" class="form-control" placeholder="Apellido Paterno" required>

    <input v-model="form.apellido_materno" class="form-control" placeholder="Apellido Materno" required>

    <input v-model="form.email" type="email" class="form-control" placeholder="Email" required>

    <input v-model="form.password" type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>

<script setup>
const form = reactive({
  name: "",
  apellido_paterno: "",
  apellido_materno: "",
  email: "",
  password: ""
});

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

  location.href('http://localhost:3000/login')
}
</script>