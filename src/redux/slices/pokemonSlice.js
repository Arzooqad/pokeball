import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pokeList: [],
}







const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            state.pokeList.push(action?.payload)
        },
        editPokemon: (state, action) => {
            state.pokeList = state.pokeList.map((poke) => poke?.id === action.payload?.id ? action.payload?.pokemon : poke)
        },
        deletePokemon: (state, action) => {
            state.pokeList = state.pokeList.filter((poke)=>poke.id !== action.payload)
        },
        

    },
})



export const { addPokemon, editPokemon, deletePokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer