<template>
  <form @submit.prevent="login">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <input v-model="form.email" type="email" class="form-control" placeholder="Email" required>

    <input v-model="form.password" type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</template>

<script setup>
const form = reactive({
  email: "",
  password: "",
});

function login() {
  let { data: dat } = useFetch('http://localhost:8080/api/v1/auth/authenticate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: form.email,
      password: form.password
    })
  });

  localStorage.setItem('token', dat.value.token);
}
</script>