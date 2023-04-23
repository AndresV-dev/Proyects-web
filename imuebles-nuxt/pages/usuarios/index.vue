<template>
    <div>
        Lista de Usuarios
        <TableProps v-bind:head=titles v-bind:tabla=tabla />
    </div>
</template>

<script setup>
//Se cambio esta vista para agregar los campos de tittles y tabla lo cual entregara al componente de tabla, este entregara la tabla de usuarios
const titles = ['id', 'status', 'Nombre Usuario', 'Correo', 'Telefono', 'Fecha Inicio', 'Fecha Fin', 'Acciones'];
const tabla = "usuario";
useHead({
    title: "Usuarios"
})
</script>

<style lang="scss" scoped></style>