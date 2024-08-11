<template>
  <header>
    <nav>
      <NuxtLink to="/">Ninja Lao</NuxtLink>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <!-- display pages content-->
  <slot />
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
