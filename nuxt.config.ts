// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    // preset: 'vercel'
  },
  runtimeConfig: {
    botToken: process.env.BOT_TOKEN,
  },
})
