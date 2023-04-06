interface Country {
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
