import styled from '@emotion/styled';

const Container = styled.div`
    max-width: 700px;
    margin: auto;
    padding: 0px 20px;

    @media(min-width: 767px) {
        max-width: 500px;
    }
`;

export default Container;