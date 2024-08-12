<template>
  <div>
    <p v-if="isLoading" class="text-center">isLoading...</p>
    <p v-if="!isLoading" class="text-center mb-4">
      Products ( <span class="font-bold text-[#12b488]"> {{ productList?.length || 0 }} </span> )
    </p>
    {{ productList }}
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

useSeoMeta({
  title: 'Ninja Lao Merch',
  description: 'high-quality merchandise that blends the dynamic spirit of the modern ninja with the rich cultural heritage of Laos'
})

const isLoading = ref(true);

// ## fetch products from api
const { data: productList } = await useFetch(
  "/api/product/all"
).then((res) => {
  isLoading.value = false;

  return res;
});
</script>

<style lang="scss" scoped></style>
