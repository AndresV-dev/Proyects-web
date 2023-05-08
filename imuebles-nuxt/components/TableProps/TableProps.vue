<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg md:w-3/4 w-4/5 mx-20">
        <table id="table" class="min-w-full text-center text-sm font-light m-auto">
            <thead class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                    <th scope="col" class="px-6 py-4" v-for="(column, index) in props.head" :key="index">{{ column }}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b dark:border-neutral-500" v-for="info in infoData">
                    <td class="md:whitespace-nowrap  md:px-6 md:py-4 px-3 py-2 md:font-medium">{{ info.id }}</td>
                    <td class="md:whitespace-nowrap  md:px-6 md:py-4 px-3 py-2">{{ info.status == 1 ? "Activo" : "Inactivo"
                    }}</td>
                    <td class="md:whitespace-nowrap  md:px-6 md:py-4 px-3 py-2">{{ info.nombre + ' ' + info.apellido_paterno
                        + ' ' +
                        info.apellido_materno }}</td>
                    <td class="md:whitespace-nowrap  md:px-6 md:py-4 px-3 py-2">{{ info.correo }}</td>
                    <td class="md:whitespace-nowrap  md:px-6 md:py-4 px-3 py-2">{{ info.telefono }}</td>
                    <td class="md:whitespace-nowrap  md:px-6 md:py-4 px-3 py-2">{{ info.fechaInicio != null ?
                        info.fechaInicio :
                        "No Disponible" }}</td>
                    <td class="md:whitespace-nowrap  md:px-6 md:py-4 px-3 py-2">{{ info.fechaFin != null ? info.fechaFin :
                        "No Disponible" }}
                    </td>
                    <td class="md:whitespace-nowrap  md:px-6 md:py-4 px-3 py-2">
                        <NuxtLink class="rounded bg-blue-700 text-white px-5 py-1.5" :to='`/${props.tabla}s/${info.id}`'>Ver
                        </NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { saveLoginInfo } from '~/stores/authData';
const logInfo = saveLoginInfo();

const props = defineProps({
    head: Array,
    tabla: String
});

let { data: infoData } = await useFetch('http://localho.st:8091/api/v1/' + props.tabla + '/list', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authentication': 'Beaber ' + logInfo.user.token
    },
});
</script>

<style scoped></style>