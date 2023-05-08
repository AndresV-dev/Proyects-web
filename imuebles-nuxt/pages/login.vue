<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-900">
    <div class="w-full max-w-xs">
      <form @submit.prevent="login" class="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <img src="../img/logo2.0.png" class="px-10" alt="">
        <h2 class="text-gray-200 mb-4 text-2xl font-semibold">Welcome back</h2>

        <div v-show="logInfo?.user.error">
          <p>
            Login Failed: Your user ID or password is incorrect
          </p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input v-model="form.email"
            class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="e.g joe1234" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-200 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="form.password"
            class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="**********" />
        </div>

        <button
          class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Login
        </button>

        <a class="mt-3 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Don't have an account? Signup.
        </a>
      </form>
    </div>
  </div>
</template>

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

  let { data: dat } = await useFetch('http://localhost:8091/api/v1/auth/authenticate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: form.email,
      password: form.password
    })
  });
  let dataRaw = toRaw(dat.value);

  if (dataRaw.message == 'Invalid Credentials') {
    logInfo.seterror(dataRaw.code, dataRaw.message);
    console.log(dataRaw.code + dataRaw.message);
    console.log(logInfo.user);
    return;
  }

  logInfo.saveLoginData(dataRaw);
  console.log(logInfo.user);
  navigateTo("/dashboard");
}
</script>