import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const PokemonCard = styled.div`
    border-radius: 0px 40px 0px 0px;
    width: 100%;
    padding: 30px 0px;
    background-color: #fff;
    position: relative;
    text-align: center;
`;

export const PokemonImage = styled.img`
    width: 90%;
    height: auto;
`;

export const PokemonDetail = styled.div`
    position: absolute;
    right: -10px;
    bottom: 15px;
    width: 130px;
    background-color: #FA4246;
    color: #fff;
    padding: 10px;
    font-size: 10px;
    text-align: left;
`;

export const PokemonName = styled(Link)`
    text-decoration: none;
    font-size: 15px;
    color: #000;
    text-transform: uppercase;
    display: block;
`;

export const PokemonAttribute = styled.div`
    span {
        display: inline-block;
        position: relative;
        margin-right: 15px;

        &:not(:last-child):before {
            content: "";
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: #FDF600;
            right: -10px;
            top: 7px;
        }

        img.icon {
            vertical-align: -3px;
            margin-right: 3px;
        }
    }
`;