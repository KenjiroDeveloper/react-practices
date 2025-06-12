import { useEffect, useState } from "react";
import { GridLayout } from "../layout/Grid_Layout";
import { Card } from "../card/Card";

export const PokemonViewer = ({offset}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const responses = await Promise.all(
          Array.from({ length: 9 }, (_, i) =>
            fetch(pokemonUrl + (offset + i)).then((res) => res.json())
          )
        );

        const parseData = responses.map((poke) => ({
          name: poke.name,
          types: poke.types.map((t) => t.type.name),
          image: poke.sprites.other["official-artwork"].front_default,
        }));

        setData(parseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    };
    fetchAllPokemon();
  }, [offset]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <GridLayout>
      {data.map((pokemon) => {
        const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        return (
          <Card
            key={pokemon.name}
            name={pokemonName}
            types={pokemon.types}
            image={pokemon.image}
          />
        );
      })}
    </GridLayout>
  );
};
