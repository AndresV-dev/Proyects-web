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
                        <div @click="$router.push({ path: `/${props.tabla}s/${info.id}`, params=info })">Ver
                        </div>
                        <button>
                            Editar </button> <button>
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

let { data: infoData } = useFetch('http://localho.st:8091/v1/' + props.tabla + '/list', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors'
        //        'Authentication': 'Beaber ' + localStorage.getItem('token')
    },
});

</script>

<style scoped></style>