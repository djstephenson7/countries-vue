import { ref } from 'vue'

const state = ref<{ data: Country[] }>({ data: [] })

const getData = () => state.value.data

const setData = (data: Country[]) => {
  state.value.data = data
}

const loadCountries = async () => {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,capital,currencies,language,flags,maps,population'
    )
    const data = await response.json()

    setData(data)
  } catch (error) {
    throw new Error('API call was not successful')
  }
}

const filterData = (searchQuery: string) => {
  const filtered = state.value.data.filter((country: Country) => {
    return country.name.official.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  })

  setData(filtered)
}

export { getData, filterData, loadCountries }
