import { Country } from "@/types/graphql";
import Link from "next/link";

interface CountryComponentProps {
  country: Country;
}

const CountryComponent = ({ country }: CountryComponentProps) => {
  return (
    <Link href={`/countries/view/${country.id}`}>
      <div>
        <div>{country.name}</div>
        <div>{country.emoji}</div>
      </div>
    </Link>
  );
};

export default CountryComponent;
