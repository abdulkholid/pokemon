import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MenuItemStyle = styled(Link)`
    position: relative;
    display: flex;
    width: 100%;
    margin: 0px 5px;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.isActive == 'true' ? '#' : '#E5AA5B'};
    height: 50px;
    color: #000;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;

    &.active {
        background-color: #022C72;
        color: white;

        svg  {
            fill: white;
        }
    }

    .icon {
        margin-right: 10px;
    }
`;