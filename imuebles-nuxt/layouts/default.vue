<template>
  <Navbar />
  <NavbarSidebar />
  <main class="maincss" id="maincss">
    <slot />
  </main>

  <Footer />
</template>

<script setup>

onMounted(() => {
  if (!process.client) return;
  const token = localStorage.getItem('token');

  if (token == null)
    location.href('http://localhost:3000/login')
})

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
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css",
      rel: "stylesheet"
    }
  ],
  script: [
    // se añade la parte de js de bootstrap la etiqueta body es para poner el script al final del html
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
      body: true,
    },
  ],
  meta: [{
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    charset: "utf-8"
  }]
});
</script>

<style>
body::-webkit-scrollbar {
  width: 7px;
  background: #144272;
}

body::-webkit-scrollbar-thumb {
  background: #2C74B3;
  border-radius: 10px;
  border-right: 2px solid #2C74B3;
}

.maincss {
  position: absolute;
  left: 20rem;
  top: 10rem;
  right: 4rem;
  padding: 2rem;
  width: fit-content;
  transition: all 500ms linear;
}

.maincss.active {
  left: 4rem;
}
</style>