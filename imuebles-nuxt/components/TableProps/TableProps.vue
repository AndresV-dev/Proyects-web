<template>
    <div>
        <table id="table" class="table table-bordered">
            <thead>
                <tr>
                    <td v-for="(column, index) in props.head" :key="index">{{ column }}</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="info in infoData">
                    <td>{{ info.id }}</td>
                    <td>{{ info.status == 1 ? "Activo" : "Inactivo" }}</td>
                    <td>{{ info.nombre + ' ' + info.apellido_paterno + ' ' + info.apellido_materno }}</td>
                    <td>{{ info.correo }}</td>
                    <td>{{ info.telefono }}</td>
                    <td>{{ info.fechaInicio != null ? info.fechaInicio : "No Disponible" }}</td>
                    <td>{{ info.fechaFin != null ? info.fechaFin : "No Disponible" }}</td>
                    <td>
                        <NuxtLink class="rounded bg-blue-600, text-gray-800" :to='`/${props.tabla}s/${info.id}`'>Ver
                        </NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    head: Array,
    tabla: String
});

let { data: infoData } = await useFetch('http://localho.st:8091/v1/' + props.tabla + '/list', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authentication': 'Beaber ' + localStorage.getItem("token")
    },
});
</script>

<style scoped></style>