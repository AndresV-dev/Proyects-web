<template>
    <div class="grid place-items-center">
        <div class="h-auto w-full text-left md:px-40 md:py-10 px-20 py-5">
            <h1 class="md:font-bold md:text-2xl text-lg font-medium"> Lista De Usuarios</h1>
        </div>
        <TableProps v-bind:head=titles v-bind:tabla=tabla />
    </div>
</template>

<script setup>
import { saveLoginInfo } from '~/stores/authData';
const logInfo = saveLoginInfo();

if (logInfo.user?.token == "")
    navigateTo("/login")

//Se cambio esta vista para agregar los campos de tittles y tabla lo cual entregara al componente de tabla, este entregara la tabla de usuarios
const titles = ['id', 'status', 'Nombre Usuario', 'Correo', 'Telefono', 'Fecha Inicio', 'Fecha Fin', 'Acciones'];
const tabla = "usuario";
useHead({
    title: "Usuarios"
})
</script>

<style lang="scss" scoped></style>