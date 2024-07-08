import { useCountryLazyQuery } from "@/types/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ViewCountry = () => {
  const router = useRouter();
  const [getCountry, { data, loading }] = useCountryLazyQuery();

  useEffect(() => {
    if (router.isReady) {
      const countryId = router.query.id as string;
      console.log("Router query:", router.query);
      console.log("Country ID:", countryId);
      getCountry({ variables: { code: countryId } });
    }
  }, [router.isReady, router.query.id]);

  if (loading) {
    return <div>Chargement en cours</div>;
  }

  const country = data?.country;

  if (!country) {
    console.log("Country data:", data);
    return <p>Pays non trouvé.</p>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>{country.emoji}</p>
      {country.continent && <p>Continent: {country.continent.name}</p>}
    </div>
  );
};

export default ViewCountry;
