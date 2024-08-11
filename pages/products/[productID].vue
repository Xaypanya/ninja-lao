<template>
  <ProductDetail :product="product"/>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { productID } = useRoute().params;
const productUri =  `https://fakestoreapi.com/products/${productID}`

const { data: product } = await useFetch(
  productUri, { key: productID }
);


if(!product.value){
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found!',
    fatal: true
  })
}

</script>

<style lang="scss" scoped>
span {
  color: red;
}
</style>
