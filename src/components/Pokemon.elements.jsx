import styled from '@emotion/styled';

export const PokemonContainer = styled.div`
    width: 100%;
    padding-top: 80px;
`;

export const PokemonRow = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
`;