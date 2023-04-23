// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
    css: [
        '@/assets/css/main.css',
      ],
    app: {
        head: {
            link: [
                {
                rel: "stylesheet",
                href: "/css/global.css"
            }],
            script: [{
                type: "text/javascript",
                src: "/js/main.js"
            }]
        }
    }
})