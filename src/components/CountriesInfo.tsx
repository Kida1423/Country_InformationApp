import { Country } from "../api/countriesApi";

interface CountriesInfoProps {
  country: Country | null;
}
const CountryInfo: React.FC<CountriesInfoProps> = ({ country }) => {
  if (!country) {
    return <div id="info">Выберите страну</div>;
  }

  return (
    <div id="info">
      <h2>{country.name.common}</h2>
      <p>
        <strong>Столица:</strong>{" "}
        {country.capital ? country.capital[0] : "Нет данных"}
      </p>
      <p>
        <strong>Население:</strong> {country.population.toLocaleString()}
      </p>
    </div>
  );
};
export default CountryInfo;
