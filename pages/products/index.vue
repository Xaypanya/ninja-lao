<template>
  <div>
    <p><NuxtLink :to="goBack"></NuxtLink></p>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="product in productList">
            <NuxtLink :to="`/products/${product?.id}`">{{ product?.title }}</NuxtLink>
        </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'products'
})

const goBack = () => {
  this.$router.back()
}

// ## fetch products from api 
const {data: productList} = await useFetch('https://fakestoreapi.com/products')


</script>

<style lang="scss" scoped>

</style>
