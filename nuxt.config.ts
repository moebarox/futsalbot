// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare_pages'
  },
  runtimeConfig: {
    botToken: process.env.BOT_TOKEN,
  },
})
