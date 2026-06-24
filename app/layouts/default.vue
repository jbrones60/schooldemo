<template>
  <div class="site-wrapper">

    <!-- Skip navigation link (shown on keyboard focus) -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Demo banner: visible to schools evaluating this product -->
    <DemoBanner />

    <!-- Site header: announcement bar + sticky navbar -->
    <header class="site-header" role="banner">
      <TopAnnouncement />
      <AppNavbar />
    </header>

    <!-- Page content -->
    <main id="main-content" tabindex="-1">
      <slot />
    </main>

    <!-- Site footer -->
    <AppFooter />

  </div>
</template>

<style scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  /* Ensure main content is focusable for skip link but not visually outlined */
  outline: none;
}
</style>
