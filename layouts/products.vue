<template>
   <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/products" class="font-bold">
        <div class="flex items-center">
          <NuxtImg
            src="/images/ninjalaologo.png"
            loading="lazy"
            fit="contain"
            alt="ninja-lao-logo"
            class="h-14 w-14 object-contain mx-auto"
          />
          <p>Ninja Lao Merch</p>
        </div></NuxtLink>
  
    </nav>
  </header>

  
    <!-- display pages content-->
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
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
  