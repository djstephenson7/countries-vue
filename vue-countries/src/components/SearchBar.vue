<script setup lang="ts">
import { ref } from 'vue'
import { filterData } from '../store'

const searchQuery = ref('')
</script>
<template>
  <input
    type="text"
    placeholder="Search countries..."
    v-model="searchQuery"
    v-on:change="filterData(searchQuery)"
  />
</template>

<style scoped>
input {
  width: 350px;
  padding: 10px 45px;
  background: white url('../assets/searchIcon.svg') no-repeat 16px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
}
</style>
