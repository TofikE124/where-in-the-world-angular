export interface CountrySummary {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
