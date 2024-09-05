import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pokeball from "../assets/pokeball.png";

const LandingPage = () => {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const allPokemonData = [];
      for (let i = 1; i <= 151; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        const speciesResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${i}`
        );
        const koreanName = speciesResponse.data.names.find(
          (name) => name.language.name === "ko"
        );
        allPokemonData.push({ ...response.data, korean_name: koreanName.name });
      }
      setPokemonData(allPokemonData);
    };

    fetchData();
  }, []);
  return (
    <Wrapper>
      <div>
        <PokemonList>
          {pokemonData.map((pokemon) => (
            <PokemonItem key={pokemon.id}>
              <div>
                <img
                  className="pokemon"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                />
                <p className="name">{pokemon.korean_name}</p>
                <p>ID: {pokemon.id}</p>
                <div className="catch">
                  <img src={pokeball} className="pokeball" />
                  <p>잡는다!</p>
                </div>
              </div>
            </PokemonItem>
          ))}
        </PokemonList>
      </div>
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 0 20px;
  margin: auto;
`;
const PokemonItem = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 20px;
  .pokemon {
    width: 150px;
  }
  .catch {
    width: 100px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 10px;
    padding: 0px 10px;
    border: 2px solid red;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
      background-color: red;
      color: white;
    }
  }
  .pokeball {
    width: 20px;
    height: fit-content;
  }
  p {
    text-align: center;
  }
  .name {
    font-size: 20px;
  }
`;
