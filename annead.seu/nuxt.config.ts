// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/i18n',
      {
        customRoutes:'config',
        pages:{
          index:{
            en:'/home',
            ca:'/',

          }
        }.
      }
    ],['@nuxt/ui',{}]
  ],
})

