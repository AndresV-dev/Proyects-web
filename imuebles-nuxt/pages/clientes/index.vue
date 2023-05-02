<template>
    Pagina Clientes

    <div class="border rounded">

    </div>
</template>

<script setup>
import { saveLoginInfo } from '~/stores/authData';
const logInfo = saveLoginInfo();

if (logInfo.user?.token == "")
    navigateTo("/login")

useHead({
    title: "Clientes"
})
</script>

<style lang="scss" scoped></style>