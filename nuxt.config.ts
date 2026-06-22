// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  // Source directory — Nuxt 4 app/ convention
  srcDir: 'app/',

  // Global CSS entry point
  css: ['~/assets/scss/main.scss'],

  // Vite SCSS config — use modern sass compiler to suppress legacy warnings
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})
