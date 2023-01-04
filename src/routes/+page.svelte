<script>
    import {pokemon} from "../stores/pokestore"
    import SingleCard from "../components/singleCard.svelte";

    let searchTerm = ""
    let filteredPokemon = []

    // react to the search term typed in the searchbar
    $: {
        console.log(searchTerm)
        if(searchTerm){
            // search the pokemon in lowercase
            filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        else{
            filteredPokemon = [... $pokemon]
        }
    }
</script>

<svelte:head>
    <title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to SvelteKit</h1>

<input bind:value={searchTerm} class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" placeholder="Search Pokemon" />

<!-- passing filtered prop to single pokemon card -->
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as poke}
    <!-- {#each $pokemon as poke} -->
        <SingleCard pokeman={poke} />
    {/each}
</div>