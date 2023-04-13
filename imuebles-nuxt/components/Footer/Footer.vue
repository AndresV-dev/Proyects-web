<template>
    <footer class="p-4 bg-dark text-white">
        &copy; Andres Vargas - {{ currentYear }}
    </footer>
</template>

<script setup>
const currentYear = new Date().getUTCFullYear();
</script>

<style scoped>
footer {
    position: fixed;
    bottom: 0;
    height: auto;
    width: 100%;
}
</style>