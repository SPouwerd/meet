import * as components from 'quasar'

export default defineNuxtPlugin((nuxtApp) => {
    const quasarOptions = {
        components,
        plugins: {},
    }

    nuxtApp.vueApp.use(components.Quasar, quasarOptions)
})