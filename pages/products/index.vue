<template>
  <div>
    <p v-if="isLoading" class="text-center">isLoading...</p>
    <p v-if="!isLoading" class="text-center mb-4">
      Products ( <span class="font-bold text-[#12b488]"> {{ productList?.length || 0 }} </span> )
    </p>
    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
      <div v-for="product in productList">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const isLoading = ref(true);

// ## fetch products from api
const { data: productList } = await useFetch(
  "https://fakestoreapi.com/products"
).then((res) => {
  isLoading.value = false;

  return res;
});
</script>

<style lang="scss" scoped></style>
