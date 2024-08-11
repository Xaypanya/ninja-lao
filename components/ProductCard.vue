<template>
    <div class="card text-center">
        
        <NuxtImg
        :src="product?.image"
        loading="lazy"
        fit="contain"
        :alt="product?.title"
        class=" h-36 w-36 object-contain mx-auto"
        />

      <p class="font-bold text-sm text-gray-500 m-4 truncate">
        {{  product?.title }}
      </p>

      <NuxtLink :to="`/products/${product?.id}`" >
        <p class="btn">
            Buy
        </p>
      </NuxtLink>

    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped>

</style>