import styled from "@emotion/styled";

export const TopBarContainer = styled.div`
    position: fixed;
    z-index: 100;
    background-color: #011e4f;
    left: 0px;
    top: 0px;
    width: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    padding: 10px 20px;

    @media(min-width: 767px) {
        width: 500px;
        left: 0px;
        right: 0px;
        margin: auto;
    }
`;

export const TopBarText = styled.div`
    margin-left: 10px;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
`;