import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.nav`
    position: fixed;
    bottom: 3%;
    width: 90%;
    padding: 15px 10px;
    left: 0px;
    right: 0px;
    margin: 0px auto;
    background-color: #FBD102;
    border: 5px solid #2A63AE;
    border-radius: 20px;
    display: flex;

    @media(min-width: 767px) {
        width: 500px;
    }
`;

export const MenuLink = styled(NavLink)`
    display: flex;
    position: relative;
    background-color: #E5AA5B;
    width: 100%;
    margin: 0px 5px;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: #000;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;

    &.active {
        background-color: #022C72;
        color: white;

        svg  {
            fill: white;

            path {
                fill: white;
            }
        }

        .counter {
            border-color: #022C72;
        }
    }

    .icon {
        margin-right: 10px;
        fill: red !important;

        path {
            fill: #000;
        }
    }

    .counter {
        position: absolute;
        display: flex;
        width: 25px;
        height: 25px;
        top: -5px;
        right: -5px;
        justify-content: center;
        align-items: center;
        background-color: #FA4246;
        color: #fff;
        border: 2px solid #E5AA5B;
        font-size: 10px;
        font-weight: 500;
        border-radius: 10px;
    }
`;