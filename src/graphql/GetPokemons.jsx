export const GET_POKEMONS = `
    query pokemons($limit: Int!) {
        pokemons(limit: $limit) {
            results {
                id
                name
                dreamworld,
                artwork
            } 
        }
    }
`;