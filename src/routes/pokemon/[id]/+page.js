export async function load({fetch, params}){
    // pokemon id
    const id = params.id
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    // // get single pokemon info from api
    const res = await fetch(url)
    const pokeman = await res.json()
    
    // return pokeman as object recieved from the API
    return { pokeman }
}
