<template>
    <header>
      <nav>
        <NuxtLink to="/products">Ninja Lao Merch</NuxtLink>
      </nav>
    </header>
  
    <!-- display pages content-->
    <slot />

    <footer>
        <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </template>
  
  <style lang="scss" scoped>
  .router-link-exact-active {
    color: #12b488;
  }
  </style>
  