<template>
    <!-- Container Principal -->
    <div class="lg:grid lg:grid-cols-3 h-full md:flex md:space-y-4">
        <!-- Formulario de Detalle de usuario -->
        <div class="ring-1 mr-8 col-span-2">
            <div class="grid grid-cols-3 mx-5 place-items-end">
                <p class="font-extrabold py-8 text-center text-2xl col-start-2"> Detalles Usuario - {{ params.id }}</p>
                <button class="bg-blue-400 font-extrabold self-center shadow rounded-lg w-28 h-10"> Editar
                </button>
            </div>
            <form class="w-full px-12 py-4">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                            Nombre
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-name" type="text" :readonly="!readable" :value="usuario.nombre">
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-lastname">
                            Apellido Paterno
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name" type="text" :readonly="!readable" :value="usuario.apellido_paterno">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-second-lastname">
                            Apellido Materno
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-phone" type="text" :readonly="!readable" :value="usuario.apellido_materno">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
                            Telefono
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-email" type="text" :readonly="!readable" :value="usuario.telefono">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                            Correo
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-creation-date" type="text" :readonly="!readable" :value="usuario.correo">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-creation-date">
                            Fecha Creacion
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" :readonly="!readable" :value="usuario.fechaCreacion">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-modification">
                            Ultima Modificacion
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-last-modification" type="text" :readonly="!readable"
                            :value="usuario.ultimaModificacion">
                    </div>
                </div>
            </form>
        </div>
        <!-- Seccion de Documentos Tramites o Clientes Vinculados-->
        <div class="ring-1 mr-8 col-span-1 grid grid-row-4 sm:mb-16">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <p class="font-extrabold text-2xl md:text-lg sm:text-sm">Tramites</p>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <td class="px-6 py-3 text-white" v-for="(column, index) in tittles.tramite" :key="index">
                                {{ column }}
                            </td>
                        </tr>
                    </thead>
                    <tbody class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <tr v-for="(row, index) in tramites" :key="index"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ row.id }}
                            </td>
                            <td class="px-6 py-4">{{ row.status }}</td>
                            <td class="px-6 py-4">{{ row.tipo }}</td>
                            <td class="px-6 py-4">{{ row.fecha_inicio }}</td>
                            <td class="px-6 py-4">{{ row.fecha_fin }}</td>
                            <td class="px-6 py-4">{{ row.ultima_modificacion }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <p class="font-extrabold text-2xl md:text-lg sm:text-sm">Documentos</p>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <td class="px-6 py-3 text-white" v-for="(column, index) in tittles.doc" :key="index">
                                {{ column }}
                            </td>
                        </tr>
                    </thead>
                    <tbody class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <tr v-for="(row, index) in documentos" :key="index"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ row.id }}
                            </td>
                            <td class="px-6 py-4">{{ row.status }}</td>
                            <td class="px-6 py-4">{{ row.tipo }}</td>
                            <td class="px-6 py-4">{{ row.fecha_inicio }}</td>
                            <td class="px-6 py-4">{{ row.fecha_fin }}</td>
                            <td class="px-6 py-4">{{ row.ultima_modificacion }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <p class="font-extrabold text-2xl md:text-lg sm:text-sm">Empresas</p>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <td class="px-6 py-3 text-white" v-for="(column, index) in tittles.empresa" :key="index">
                                {{ column }}
                            </td>
                        </tr>
                    </thead>
                    <tbody class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <tr v-for="(row, index) in empresas" :key="index"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ row.id }}
                            </td>
                            <td class="px-6 py-4">{{ row.status }}</td>
                            <td class="px-6 py-4">{{ row.tipo }}</td>
                            <td class="px-6 py-4">{{ row.fecha_inicio }}</td>
                            <td class="px-6 py-4">{{ row.fecha_fin }}</td>
                            <td class="px-6 py-4">{{ row.ultima_modificacion }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { saveLoginInfo } from '~/stores/authData';
const logInfo = saveLoginInfo();

const params = useRoute().params;
const tittles = {
    'tramite': ['id', 'Status', 'Tipo', 'Fecha Inicio', 'Fecha Fin', 'Ultima Modificacion'],
    'doc': ['id', 'Nombre', 'Tipo', 'URL', 'Ultima Modificacion'],
    'empresa': ['id', 'Nombre', 'Status', 'Direccion', 'Ultima Modificacion'],
}

useHead({
    title: "Usuario - " + params.id
})

let readable = false;
const { data: usuario } = await useFetch('http://localho.st:8091/v1/usuario/id/' + params.id, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authentication': 'Beaber ' + logInfo.user.token
    },
})


</script>

<style lang="scss" scoped></style>
