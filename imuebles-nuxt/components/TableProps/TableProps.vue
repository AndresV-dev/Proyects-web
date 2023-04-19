<template>
    <div>
        <table id="table" class="table table-bordered">
            <thead>
                <tr>
                    <td v-for="(column, index) in props.head" :key="index">{{ column }}</td>
                </tr>
            </thead>
            <tbody v-for="info in infoData">
                <tr>
                    <td>{{ info.id }}</td>
                    <td>{{ info.status == 1 ? "Activo" : "Inactivo" }}</td>
                    <td>{{ info.nombre + ' ' + info.apellido_paterno + ' ' + info.apellido_materno }}</td>
                    <td>{{ info.correo }}</td>
                    <td>{{ info.telefono }}</td>
                    <td>{{ info.fechaInicio != null ? info.fechaInicio : "No Disponible" }}</td>
                    <td>{{ info.fechaFin != null ? info.fechaFin : "No Disponible" }}</td>
                    <td>
                        <NuxtLink :to="`/${props.tabla}/${info.id}`"> Ver </NuxtLink> <button> Editar </button> <button>
                            Documentos
                        </button>
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

const { data: infoData } = await useFetch('http://localho.st:8091/v1/' + props.tabla + '/list', {
    method: 'GET',
    mode: 'no-cors',
    credentials: 'include'
})

</script>

<style scoped></style>