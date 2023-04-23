<template>
    <div class="relative flex min-h-screen">
        <!-- Sidebar -->
        <div id="sidebar"
            class="bg-[#183553] fixed text-cyan-100 w-64 space-y-6 px-2 py-4 inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-1000 ease-in-out">
            <a href="" class="flex items-center space-x-2 px-4"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg><span class="text-2xl font-extrabold text-white">Muebles App</span></a>
            <nav>
                <a href=""
                    class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-800 rounded hover:text-cyan-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300"> Dashboard </span> </a>
                <a href=""
                    class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-800 rounded hover:text-cyan-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Usuarios</span> </a>
                <a href=""
                    class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-800 rounded hover:text-cyan-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Clientes</span> </a>
                <a href=""
                    class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-800 rounded hover:text-cyan-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Tramites</span> </a>
                <a href=""
                    class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-800 rounded hover:text-cyan-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Muebles</span> </a>
            </nav>
        </div>
        <div class="bg-[#183553] absolute w-full -z-10 text-cyan-100 grid justify-items-end left-0 py-6">
            <button class="rounded bg-green-700 text-white-100 border px-3 mx-6">Login
            </button>
        </div>
        <!-- Main Content -->
        <div class="flex-1">
            <!-- Header -->
            <div class="py-10"></div>
            <div id="buttonsidebar" class="bg-white shadow px-2 py-2 w-14 flex justify-items-center">
                <button @click="sideChange()" class="text-cyan-700 font-extrafold w-64">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            </div>
            <!-- Content -->
            <div class="p-8">
            </div>
        </div>
    </div>
</template>

<script setup>
function sideChange() {
    document.getElementById("buttonsidebar").classList.toggle('absolute');
    document.getElementById("buttonsidebar").classList.toggle('left-0');
    document.getElementById("sidebar").classList.toggle('md:relative')
    document.getElementById("sidebar").classList.toggle('md:-translate-x-0')
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
  