<template>
    <div>
        Lista de Usuarios
        <TableProps v-bind:head=titles v-bind:tabla=tabla />
    </div>
</template>

<script setup>
const titles = ['id', 'status', 'Nombre Usuario', 'Correo', 'Telefono', 'Fecha Inicio', 'Fecha Fin', 'Acciones'];
const tabla = "usuario";
useHead({
    title: "Usuario"
})
</script>

<style lang="scss" scoped></style>