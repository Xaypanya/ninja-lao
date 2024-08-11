<template>
  <div>
    <p>All Products</p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productList" :key="item?.id">
          <td><NuxtLink :to="`/products/${item?.id}`">{{ item?.name }}</NuxtLink></td>
          <td>{{ laokip(item.pricePerUnit) }}</td>
          <td>{{ item.unit }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'products'
})

import productList from "~/assets/json/productList.json";

const laokip = (num) => {
  if (!num) return 0;
  if (typeof num !== "number") return "expected datatype to be number";

  return num.toLocaleString() + " KIP";
};



</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;

  th,
  td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tr {
    &:hover {
      background-color: #f1f1f1;
    }

    &:nth-child(even) {
      background-color: #f9f9f9;
    }
  }
}
</style>
