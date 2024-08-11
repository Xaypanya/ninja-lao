<template>
  <div>
    <p><NuxtLink to="/products">View All Products</NuxtLink></p>
    <p>
      Product ID <span>{{ productID }}</span>
    </p>
    <p>
      Name <span>{{ currentProduct?.name }}</span>
    </p>
    <p>
      Price <span>{{ currentProduct?.pricePerUnit }}</span>
    </p>
    <p>
      Unit <span>{{ currentProduct?.unit }}</span>
    </p>
  </div>
</template>

<script setup>
import productList from "~/assets/json/productList.json";
const { productID } = useRoute().params;
const currentProduct = productList?.find((item) => item.id == productID);
</script>

<style lang="scss" scoped>
span {
  color: red;
}
</style>
