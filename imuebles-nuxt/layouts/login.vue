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
    link: [
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
            rel: "stylesheet",
            integrity: "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
            crossorigin: "anonymous",
        },
    ],
    script: [
        // se añade la parte de js de bootstrap la etiqueta body es para poner el script al final del html
        {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
            body: true,
        },
    ],
});
</script>