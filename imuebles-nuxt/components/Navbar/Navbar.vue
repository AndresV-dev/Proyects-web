<template>
  <div class="navbar-line">
    <ul class="pt-5 nav d-flex flex-row-reverse">
      <li class="nav-item p-3 py-md-1">
        <NuxtLink class="nav-link rounded bClass" to="/dashboard">Dashboard</NuxtLink>
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
    </ul>
  </div>
</template>

<style>
.navbar-line {
  position: fixed;
  background-color: #144272;
  padding-left: 12rem;
  z-index: 1;
  width: 100%;
  top: 0;
  align-items: end;
}

.bClass {
  color: #dbdbdb;
}
</style>
