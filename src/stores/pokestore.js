import {writable} from "svelte/store"

// global context
export const pokemon = writable([])

const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150'
    const res = await fetch(url)
    const data = await res.json()

    // populating index and image to pokemon data
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/'+(index + 1)+'.png'
        }
    })
    pokemon.set(loadedPokemon)
}

fetchPokemon()