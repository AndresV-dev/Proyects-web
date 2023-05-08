<template>
  <div class="relative min-h-screen md:flex">
    <!-- Sidebar  -->
    <div id="sidebar"
      class="bg-[#183553] text-cyan-300 w-72 fixed inset-y-0 left-0 z-10 py-10 transform -translate-x-full md:translate-x-0 transition duration-300 ease-in-out">
      <div class="inline-flex">
        <NuxtLink href="" class="flex items-center space-x-2 px-4"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg><span class="text-2xl font-extrabold text-white">Muebles App</span>
        </NuxtLink>
        <button @click="open()" type="button" class="mb-8 md:hidden">X</button>
      </div>
      <nav id="navSide" class="py-8 pl-5">
        <NuxtLink href="/dashboard"
          class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-800 rounded hover:text-cyan-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span class="text-white group-hover:text-cyan-300"> Dashboard </span>
        </NuxtLink>
        <NuxtLink href="/usuarios"
          class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-800 rounded hover:text-cyan-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <span class="text-white group-hover:text-cyan-300">Usuarios</span>
        </NuxtLink>
        <NuxtLink href="/clientes"
          class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-800 rounded hover:text-cyan-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          <span class="text-white group-hover:text-cyan-300">Clientes</span>
        </NuxtLink>
        <NuxtLink href="/tramites"
          class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-800 rounded hover:text-cyan-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span class="text-white group-hover:text-cyan-300">Tramites</span>
        </NuxtLink>
        <NuxtLink href="/muebles"
          class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-800 rounded hover:text-cyan-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
          </svg>
          <span class="text-white group-hover:text-cyan-300">Muebles</span>
        </NuxtLink>
      </nav>
    </div>
    <!-- Contenedor Principal  -->
    <div class="flex flex-col h-screen w-full">
      <!-- Header  -->
      <header class="bg-[#183553] p-3 fixed left-0 top-0 h-20 md:pl-72">
        <!-- Main navigation container -->
        <nav id="" class="">
          <div id="nava" class="grid grid-cols-2 h-14">
            <!-- Hamburger button for mobile view -->
            <button @click="open()"
              class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
              type="button" data-te-collapse-init data-te-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
              <!-- Hamburger icon -->
              <span class="[&>svg]:w-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
                  <path fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button>
            <div id="camp" class="lg:hidden"></div>
            <!-- Collapsible navigation container -->
            <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContent1" data-te-collapse-item>
              <!-- Left navigation links -->
              <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
                <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <!-- Dashboard link -->
                  <NuxtLink
                    class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                    href="/dashboard" data-te-nav-link-ref>Dashboard</NuxtLink>
                </li>
                <!-- Team link -->
                <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <NuxtLink
                    class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/usuarios" data-te-nav-link-ref>Usuarios</NuxtLink>
                </li>
                <!-- Projects link -->
                <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <NuxtLink
                    class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/muebles" data-te-nav-link-ref>Muebles</NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Right elements -->
            <div class="relative flex items-center justify-end sm:grid-rows-4 mr-8">
              <!-- Cart Icon -->
              <NuxtLink
                class="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#">
                <span class="[&>svg]:w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                    <path
                      d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </span>
              </NuxtLink>

              <!-- Container with two dropdown menus -->
              <div class="relative" data-te-dropdown-ref>
                <!-- First dropdown trigger -->
                <NuxtLink
                  class="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#" id="dropdownMenuButton1" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                  <!-- Dropdown trigger icon -->
                  <span class="[&>svg]:w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                      <path fill-rule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <!-- Notification counter -->
                  <span
                    class="absolute -mt-5 ml-5 rounded-[0.37rem] bg-danger px-[0.1em] py-[0.4rem] text-[0.7rem] leading-none text-white">1</span>
                </NuxtLink>
                <!-- First dropdown menu -->
                <ul
                  class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1" data-te-dropdown-menu-ref>
                  <!-- First dropdown menu items -->
                  <li>
                    <NuxtLink
                      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#" data-te-dropdown-item-ref>Action</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#" data-te-dropdown-item-ref>Another action</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#" data-te-dropdown-item-ref>Something else here</NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- Second dropdown container -->
              <div class="relative" data-te-dropdown-ref>
                <!-- Second dropdown trigger -->
                <NuxtLink
                  class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  href="#" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                  <!-- User avatar -->
                  <img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" class="rounded-full"
                    style="height: 3rem; width: 3rem" alt="" loading="lazy" />
                </NuxtLink>
                <!-- Second dropdown menu -->
                <ul
                  class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                  <!-- Second dropdown menu items -->
                  <li>
                    <NuxtLink
                      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#" data-te-dropdown-item-ref>Action</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#" data-te-dropdown-item-ref>Another action</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#" data-te-dropdown-item-ref>Something else here</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <!-- Contenido Main  -->
      <main class="flex-grow my-24 md:ml-80">
        <slot />
      </main>
      <!-- Footer  -->
      <footer class="bg-gray-600 fixed left-0 bottom-0 z-20 text-white w-full h-12 py-2">
        &copy; Andres Vargas {{ currentYear }}
      </footer>
    </div>
  </div>
</template>

<script setup>
import { saveLoginInfo } from '~/stores/authData';
const currentYear = new Date().getUTCFullYear();

const logInfo = saveLoginInfo();

if (logInfo.user.token == null)
  navigateTo("/login");

function open() {
  document.getElementById("sidebar").classList.toggle('-translate-x-full')
}

// hook para administrar los css y js en este caso los de Bootstrap, asi como el titulo de la pag en general
useHead({
  // titleTemplate es para settear una estructura del titulo el %s indica que puede ser sustituido por un string
  // miestras que el resto del title estara en todas las rutas
  titleTemplate: "%s - Imuebles",
  bodyAttrs: [
    {
      class: "text-center",
    },
  ],
  meta: [{
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    charset: "utf-8"
  }]
});
</script>
<style>
header {
  width: 100%;
}

@media (min-width:200px) and (max-width:769px) {
  #nava {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  #camp {
    display: none !important;
  }
}

@media (min-width:769px) and (max-width:1024px) {
  #camp {
    visibility: visible !important;
  }
}

body::-webkit-scrollbar {
  width: 7px;
  background: #144272;
}

body::-webkit-scrollbar-thumb {
  background: #2C74B3;
  border-radius: 10px;
  border-right: 2px solid #2C74B3;
}

.maincss {
  position: absolute;
  left: 20rem;
  top: 10rem;
  right: 4rem;
  padding: 2rem;
  width: fit-content;
  transition: all 500ms linear;
}

.maincss.active {
  left: 4rem;
}
</style>