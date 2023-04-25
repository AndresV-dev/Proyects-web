<template>
    <main>
        <slot />
    </main>
</template>

<script setup>
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
});
</script>