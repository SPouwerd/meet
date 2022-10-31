import { quasar } from '@quasar/vite-plugin'

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
    build: {
      transpile: ['quasar']
    },
    vite: {
        define: {
          'process.env.DEBUG': false,
        },
        plugins: [
          quasar({
            sassVariables: 'assets/styles/quasar.variables.sass'
          })
        ]
    },
    css: [
        '@/assets/main.css',
        '@quasar/extras/material-icons/material-icons.css',
        '~/assets/styles/quasar.sass',
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
