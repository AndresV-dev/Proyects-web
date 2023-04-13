<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <td>id</td>
                    <td>status</td>
                    <td>Nombre Agente</td>
                    <td>Correo</td>
                    <td>Telefono</td>
                    <td>Fecha Inicio</td>
                    <td>Fecha Fin</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody v-for="usu in usuarios">
                <tr>
                    <td>{{ usu.id }}</td>
                    <td>{{ usu.status == 1 ? "Activo" : "Inactivo" }}</td>
                    <td>{{ usu.nombre + ' ' + usu.apellido_paterno + ' ' + usu.apellido_materno }}</td>
                    <td>{{ usu.correo }}</td>
                    <td>{{ usu.telefono }}</td>
                    <td>{{ usu.fechaInicio != null ? usu.fechaInicio : "No Disponible" }}</td>
                    <td>{{ usu.fechaFin != null ? usu.fechaFin : "No Disponible" }}</td>
                    <td>
                        <NuxtLink :to="`/usuario/${usu.id}`"> Ver </NuxtLink> <button> Editar </button> <button>
                            Documentos
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
//fetch agentes
const { data: usuarios } = await useFetch('http://localho.st:8091/v1/agente/list')
</script>

<style scoped></style>