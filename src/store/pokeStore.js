import { create } from "zustand";

const usePokeStore = create((set) => ({
  mypokemons: [],
  addPoke: (id, img, pokename) =>
    set((state) => ({
      mypokemons: [...state.mypokemons, { id, img, pokename }],
    })),
  removePoke: (id) =>
    set((state) => ({
      mypokemons: state.mypokemons.filter((pokemon) => pokemon.id != id),
    })),
}));

export default usePokeStore;
