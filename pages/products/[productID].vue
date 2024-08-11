<template>
  <div>
    <h1 class="title">{{ product?.title }}</h1>
    <div class="p-4">
      <NuxtImg :src="product?.image"
      sizes="70vw sm:30vw md:400px"
      class="border rounded-lg bg-white p-4 my-4 mx-auto"
      placeholder />
      <p>
        {{ product?.description }}
      </p>
      <p class="mt-4 font-bold">{{ formatUSD(product?.price) }}</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { productID } = useRoute().params;

const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${productID}`
);
</script>

<style lang="scss" scoped>
span {
  color: red;
}
</style>
