<script>
    export let data
    const pokeman = data.pokeman
    console.log(pokeman)
</script>
<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
    <p>
        Type:     <strong>{pokeman.types[0].type.name}</strong>
        | Height:   <strong>{pokeman.height}</strong>
        | Weight:   <strong>{pokeman.weight}</strong>
    </p>
    <img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name}>
</div>