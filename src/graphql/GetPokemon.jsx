export const GET_POKEMON = `
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            sprites {
                front_default
            }
            types {
                type {
                  name
                }
            }
            stats {
                base_stat
                stat {
                  name
                }
            }
            moves {
                move {
                    name
                }
            }
        }
    }
`;