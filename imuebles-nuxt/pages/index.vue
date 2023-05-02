<template>
    <h1> Hola Index Page</h1>
</template>

<script setup>
import { saveLoginInfo } from '~/stores/authData';
const logInfo = saveLoginInfo();

if (logInfo.user?.token == "")
    navigateTo("/login")

useHead({
    title: "Index"
})

</script>
