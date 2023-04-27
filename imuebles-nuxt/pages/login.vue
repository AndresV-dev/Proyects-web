<template>
  <form @submit.prevent="login">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <input v-model="form.email" type="email" class="form-control" placeholder="Email" required>

    <input v-model="form.password" type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</template>
<!--
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    async login() {
      try {
        let { data: dat } = useFetch('http://localhost:8091/v1/auth/authenticate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: form.email,
            password: form.password
          })
        });

        localStorage.setItem('token', dat.value.token);
      } catch (error) {
        console.log("Error on Login")
      }
    }
  }

}
</script>
-->
<script setup>
import { saveLoginInfo } from '~/stores/authData';
const logInfo = saveLoginInfo();

definePageMeta({
  layout: 'login'
})

const form = reactive({
  email: "",
  password: ""
})

async function login() {

  let { data: dat } = await useFetch('http://localhost:8091/v1/auth/authenticate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: form.email,
      password: form.password
    })
  });

  let dataRaw = toRaw(dat.value);
  logInfo.saveLoginData(dataRaw)
}
</script>