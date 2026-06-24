// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  // Source directory — Nuxt 4 app/ convention
  srcDir: 'app/',

  // Register components by filename only, not directory/filename
  components: [{ path: '~/components', pathPrefix: false }],

  // Global CSS entry point
  css: ['~/assets/scss/main.scss'],

  // Global <head> defaults (page-level SEO is set via useSeo() composable)
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { property: 'og:type',   content: 'website' },
        { name: 'theme-color',   content: '#1455d9' },
      ],
    },
  },

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
