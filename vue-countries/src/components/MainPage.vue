<script setup lang="ts">
import usePagination from '@/hooks/usePagination'
import { onMounted } from 'vue'
import { getData, loadCountries } from '../store'
import CountryCard from './CountryCard.vue'
import SearchBar from './SearchBar.vue'

const { data, paginatedData, perPage, nextPage, backPage, goToPage } = usePagination(getData())

onMounted(async () => await loadCountries())

const sortedCountries = (order?: 'ASC' | 'DESC') => {
  const compare = (a: Country, b: Country) => {
    const firstName = a.name.official.toLowerCase()
    const secondName = b.name.official.toLowerCase()

    if (order === 'DESC') {
      return firstName > secondName ? 1 : -1
    } else if (order === 'ASC') {
      return firstName < secondName ? 1 : -1
    }
    return 0
  }

  return data.sort(compare)
}
</script>

<template class="container">
  <h1 class="header">Countries Catalogue</h1>
  <SearchBar />
  <p>Sort by name</p>
  <button v-on:click="sortedCountries('ASC')">Asc</button>
  <button v-on:click="sortedCountries('DESC')">Desc</button>
  <div class="grid-container">
    <CountryCard v-for="country in paginatedData" :key="country.name.official" v-bind="country" />
  </div>
  <div class="pagination-buttons">
    <button @click="backPage">Prev</button>
    <button
      v-for="item in Math.ceil(data.length / perPage)"
      :key="item"
      @click="() => goToPage(item)"
    >
      {{ item }}
    </button>
    <button @click="nextPage">Next</button>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 8px;
}

.pagination-buttons {
  display: flex;
  justify-content: space-evenly;
  margin: 16px 100px 0px 100px;
}
</style>
