const getCountries = async () => {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,capital,currencies,language,flags,maps,population'
    )
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('API call was not successful')
  }
}

export default getCountries
