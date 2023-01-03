<script>
    import {pokemon} from "../stores/pokestore"
    console.log($pokemon)
</script>

<svelte:head>
    <title>Pokedex</title>
</svelte:head>


<h1>Welcome to SvelteKit</h1>

{#each $pokemon as poke}
    <p>{poke.name}</p>
{/each}