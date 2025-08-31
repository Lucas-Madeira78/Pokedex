import axios from "axios";

export async function getPokemonList(limit, offSet = 0) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`)              
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

export async function getPokemonOfList(list, filter = false) {
    try {
        if (!filter) {
            const pokemons = await Promise.all(
                list.map( async (pokemon) => {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                    return response.data;
                })
            );
            return pokemons;   
        } else {
            const pokemons = await Promise.all(
                list.map( async (pokemon) => {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon.name}`);
                    return response.data;
                })
            );
            return pokemons;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getPokemon(name) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
}

export async function getInfo(url) {
    return axios.get(url)
}

export async function getTypeList(type) {
    return axios.get(`https://pokeapi.co/api/v2/type/${type}`)
}