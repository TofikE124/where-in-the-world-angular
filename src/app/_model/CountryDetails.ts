export class CountryDetails {
  name: {
    common: string;
    nativeName: { [key: string]: { official: string; common: string } };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: { [key: string]: { name: string; symbol: string } };
  languages: { [key: string]: string };
  flags: { png: string; svg: string; alt: string };
  borders: string[];

  constructor(country: CountryDetails) {
    this.name = country.name;
    this.population = country.population;
    this.region = country.region;
    this.subregion = country.subregion;
    this.capital = country.capital;
    this.tld = country.tld;
    this.currencies = country.currencies;
    this.languages = country.languages;
    this.flags = country.flags;
    this.borders = country.borders || [];
  }

  getNativeName() {
    return Object.values(this.name.nativeName)
      .map((nativeName) => nativeName.common)
      .join(', ');
  }

  getCapital() {
    return this.capital.join(',');
  }

  getTld() {
    return this.tld.join(',');
  }

  getCurrencies() {
    return Object.values(this.currencies)
      .map((currency) => `${currency.name} (${currency.symbol})`)
      .join(',');
  }

  getLanguages() {
    return Object.values(this.languages).join(',');
  }
}
