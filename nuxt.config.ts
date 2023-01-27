// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    // preset: 'netlify'
  },
  runtimeConfig: {
    botToken: process.env.BOT_TOKEN,
  },
})
