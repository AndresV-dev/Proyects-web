<template>
    <div class="container sidebar" id="sidebar">
        <button class="btnToggle" v-on:click="activeToggle">
            <i class="bi bi-list"></i>
        </button>
        <img src="/img/magnabyte.svg" style="max-width: 70%;height: auto;" alt="">
        <ul class="pt-5 nav flex-column">
            <li class="nav-item p-3 py-md-1">
                <NuxtLink class="nav-link bClass" to="/dashboard">Dashboard</NuxtLink>
            </li>
            <li class="nav-item p-3 py-md-1">
                <NuxtLink class="nav-link rounded bClass" to="/cliente">Clientes</NuxtLink>
            </li>
            <li class="nav-item p-3 py-md-1">
                <NuxtLink class="nav-link rounded bClass" to="/tramite">Tramites</NuxtLink>
            </li>
            <li class="nav-item p-3 py-md-1">
                <NuxtLink class="nav-link rounded bClass" to="/inmueble">Inmuebles</NuxtLink>
            </li>
            <li class="nav-item p-3 py-md-1">
                <NuxtLink class="nav-link rounded bClass" to="/usuario">Usuarios</NuxtLink>
            </li>
            <!-- Enlaces de Redes Sociales-->
            <li class="">
                <i class="bi bi-twitter px-2 text-info fs-2"></i>
                <a href=""><i class="bi bi-facebook px-2 text-info fs-2"></i> </a>
                <a href=""><i class="bi bi-github px-2 text-info fs-2"></i> </a>
                <a href=""><i class="bi bi-whatsapp px-2 text-info fs-2"></i> </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
function activeToggle() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('maincss').classList.toggle('active');
}
</script>

<style>
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    padding: 58px 0 0;
    /* Height of navbar */
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
    width: 16rem;
    background-color: #144272;
    z-index: 1;
    left: 0;
    transition: all 500ms linear;
}

.sidebar.active {
    left: -16rem;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto;
    /* Scrollable contents if viewport is shorter than content. */
}

.btnToggle {
    position: absolute;
    top: 1.5rem;
    left: 16rem;
    width: 2.5rem;
    height: 2.7rem;
    border-radius: .5;
    background-color: #205295;
    color: white;
}

.bClass {
    color: #dbdbdb;
}

@media screen {}

.btnToggle.active {
    display: none;
}
</style>
  