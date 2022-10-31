// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app:{
        head:{
            "meta": [
                {
                  "name": "viewport",
                  "content": "width=device-width, initial-scale=1"
                },
                {
                  "charset": "utf-8"
                }
              ],
              "title": "meet_app",
              "link": [],
              "style": [],
              "script": [],
              "noscript": []
        }},
    vite: {
        server:{
        },
        plugins: []
    },
    css: [
        '@/assets/main.css',
        'primevue/resources/themes/saga-blue/theme.css ',      //theme
        'primevue/resources/primevue.min.css',               //core css
        'primeicons/primeicons.css ',                 //icons
    ],
    typescript: {
        shim: false,
        typeCheck: true,
    },    
    runtimeConfig: {
        apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
        public: {
          apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        }
      },
})
