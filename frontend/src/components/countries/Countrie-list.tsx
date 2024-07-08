import { Country } from "@/types/graphql";
import CountryComponent from "./Country";

interface CountriesListProps {
  countries: Country[];
}

const CountriesList = ({ countries }: CountriesListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
      {countries.map((country) => (
        <div key={country.id} className="bg-white shadow-md rounded-lg p-4">
          <CountryComponent country={country} />
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
