import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const PokemonItemStyle = styled.div`
    border-radius: 0px 40px 0px 0px;
    width: 100%;
    padding: 30px 0px;
    background-color: #fff;
    position: relative;
    text-align: center;

    .pokemon-image {
        width: 90%;
        height: auto;
    }

    .detail {
        position: absolute;
        right: -10px;
        bottom: 15px;
        width: 130px;
        background-color: #FA4246;
        color: #fff;
        padding: 10px;
        font-size: 10px;
        text-align: left;

        .name {
            text-decoration: none;
            font-size: 15px;
            color: #000;
            text-transform: uppercase;
            display: block;
        }

        .attributes {
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
        }
    }
`;

const pad = (number, length) => {
    var str = '' + number;
    while (str.length < length) 
    str = '0' + str;
    return str;
}

const PokemonItem = ({ id, image, name }) => {
    return (
        <PokemonItemStyle>
            <img className="pokemon-image" src={ image } alt="CHARIZARD"/>

            <div className="detail">
                <Link to={ `/${name}/detail` } className="name">{ name }</Link>
                <div className="attributes">
                    <span>Pokemon ID: #{ pad(id, 4) }</span>
                    {/* <span>
                        <img className="icon" src={ IconAttack } alt="Icon Attack" width="12" />
                        { attack }
                    </span>
                    <span>
                        <img className="icon" src={ IconHitPoint } alt="Icon Attack" width="13" />
                        { hitPoint }
                    </span> */}
                </div>
            </div>
        </PokemonItemStyle>
    )
}

export default PokemonItem
