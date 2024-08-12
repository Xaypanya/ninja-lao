<template>
  <div>
    <div class="p-4 flex flex-col md:flex-row gap-8">
      <NuxtImg
        :src="product?.image"
        loading="lazy"
        fit="contain"
        class="border h-96 w-80 md:w-96 object-contain rounded-lg bg-white p-4 my-4 md:my-0 mx-auto"
      />
      <div>
        <h1 class="title">{{ product?.title }}</h1>
        <p class="mt-4 font-bold">Price - {{ formatUSD(product?.price) }}</p>
        <p class="mt-4">
          {{ product?.description }}
        </p>
        <button class="btn flex mt-4">
              <i class="material-icons mr-2">add_shopping_cart</i>
              <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped></style>
