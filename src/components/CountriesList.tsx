import { useState, useEffect } from "react";
import { fetchAllCountries, Country } from "../api/countriesApi";
import CountryInfo from "./CountriesInfo";

const CountriesList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchAllCountries();
      setCountries(data);
    };
    getCountries();
  }, []);
  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
  };
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container">
      <div></div>
      <div className="country-list">
        <h2>Список стран</h2>
        <input
          type="text"
          placeholder="Поиск страны..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul>
          {filteredCountries.map((country) => (
            <li
              key={country.cca3}
              onClick={() => setSelectedCountry(country)}
              style={{ cursor: "pointer" }}
            >
              {country.name.common}
            </li>
          ))}
        </ul>
      </div>
      <CountryInfo country={selectedCountry} />
    </div>
  );
};

export default CountriesList;
