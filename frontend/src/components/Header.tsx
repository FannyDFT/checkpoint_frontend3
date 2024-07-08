import Link from "next/link";
import CountriesList from "./countries/Countrie-list";
import { Country, useGetCountriesQuery } from "@/types/graphql";

export default function Header() {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <p>Chargement en cours</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  const countries: Country[] = data?.countries || [];

  return (
    <header className="header">
      <h1>Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
      <CountriesList countries={countries} />
    </header>
  );
}
