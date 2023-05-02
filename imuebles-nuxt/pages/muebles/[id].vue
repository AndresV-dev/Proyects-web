<template>
    <div>

    </div>
</template>

<script setup>
import { saveLoginInfo } from '~/stores/authData';
const logInfo = saveLoginInfo();

if (logInfo.user?.token == "")
    navigateTo("/login")

useHead({
    title: "Inmuebles"
})
</script>

<style lang="scss" scoped></style>