<script setup lang="ts">
import { defineProps } from 'vue'

interface CountriesResponse {
  flags: Flags
  name: Name
  currencies: Currencies
  capital: string[]
  maps: Maps
  population: number
}

interface Currencies {
  [key: string]: {
    name: string
    symbol: string
  }
}

interface Flags {
  png: string
  svg: string
  alt: string
}

interface Maps {
  googleMaps: string
  openStreetMaps: string
}

interface Name {
  common: string
  official: string
  nativeName: NativeName
}

interface NativeName {
  eng: {
    official: string
    common: string
  }
}

defineProps<CountriesResponse>()
</script>

<template>
  <div class="country-card">
    <img class="image" :src="flags.svg" :alt="flags.alt" />
    <h4>{{ name.official }}</h4>
    <p>{{ capital[0] }}</p>
    <button>View Details</button>
  </div>
</template>

<style scoped>
.country-card {
  margin: 8px;
  border: 1px solid;
  padding: 8px;
}
.image {
  padding: 8px;
  height: 50px;
  width: 50px;
}
</style>
