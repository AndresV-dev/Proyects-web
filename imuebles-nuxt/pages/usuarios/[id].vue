<template>
    <!-- Container Principal -->
    <div class="grid grid-cols-3 h-full">
        <!-- Formulario de Detalle de usuario -->
        <div class="ring-1 mr-8 col-span-2">
            <p class="font-extrabold w-full py-8 text-center text-2xl"> Detalles Usuario - {{ params.id }}</p>
            <form class="w-full px-12 py-4">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name">
                            Name
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" value="usuario.nombre">
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            Last Name
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name" type="text"
                            placeholder="usuario.apellido_paterno + usuario.apellido_materno">
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Phone
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="text" placeholder="Albuquerque">
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Email
                        </label>
                        <div class="relative">
                            <select
                                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Start Date
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip" type="text" placeholder="90210">
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            End Date
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip" type="text" placeholder="90210">
                    </div>
                </div>
            </form>
        </div>
        <!-- Seccion de Documentos Tramites o Clientes Vinculados-->
        <div class="ring-1 mr-8 col-span-1 grid grid-row-4">
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
const params = useRoute().params;
const tittles = {
    'tramite': ['id', 'Status', 'Tipo', 'Fecha Inicio', 'Fecha Fin', 'Ultima Modificacion'],
    'doc': ['id', 'Nombre', 'Tipo', 'URL', 'Ultima Modificacion'],
    'empresa': ['id', 'Nombre', 'Status', 'Direccion', 'Ultima Modificacion'],
}


/*const { data: usuario } = useFetch('http://localho.st:8091/v1/usuario/id/' + params.id, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors'
        //        'Authentication': 'Beaber ' + localStorage.getItem('token')
    },
})
*/
useHead({
    title: "Usuario - " + params.id
})
</script>

<style lang="scss" scoped></style>