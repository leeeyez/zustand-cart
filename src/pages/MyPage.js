import React from "react";
import { styled } from "styled-components";
import usePokeStore from "../store/pokeStore";
import pokeball from "../assets/pokeball.png";

const MyPage = () => {
  const mypokemons = usePokeStore((state) => state.mypokemons);
  const removePoke = usePokeStore((state) => state.removePoke);

  const handleRemovePokemon = (id, name) => {
    removePoke(id);
    alert(`${name} 을/를 놓아줬다!`);
  };
  return (
    <Wrapper>
      <div>
        <PokemonList>
          {mypokemons.map((pokemon) => (
            <PokemonItem key={pokemon.id}>
              <div>
                <img
                  className="pokemon"
                  src={pokemon.img}
                  alt={pokemon.pokename}
                />
                <p className="name">{pokemon.pokename}</p>
                <p>ID: {pokemon.id}</p>
                <div
                  className="catch"
                  onClick={() =>
                    handleRemovePokemon(pokemon.id, pokemon.pokename)
                  }
                >
                  <img src={pokeball} className="pokeball" />
                  <p>놓아준다</p>
                </div>
              </div>
            </PokemonItem>
          ))}
        </PokemonList>
      </div>
    </Wrapper>
  );
};

export default MyPage;

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
