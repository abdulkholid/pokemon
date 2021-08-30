import styled from '@emotion/styled';
import IconAttack from '../images/icon-attack.svg';
import IconHitPoint from '../images/icon-hitpoint.svg';

const ImageDetail = ({ id, name, image, attack, hitPoint, isMyPokemon }) => {
    const ImageDetailStyle = styled.div`
        padding: 10px 20px 20px;
        background-color: #fff;
        position: relative;
        text-align: right;

        .image {
            width: 110px;
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 25px;
        }

        .detail {
            position: absolute;
            left: 20px;
            bottom: -30px;
            width: 200px;
            background-color: #FA4246;
            color: #fff;
            padding: 20px;
            font-size: 15px;
            text-align: left;

            .own-badge {
                position: absolute;
                top: -40px;
                left: 0px;
                color: #2A63AE;
                background-color: #FBD102;
                padding: 5px 10px;
                font-size: 13px;
                font-weight: 500;
                border-radius: 5px;
            }

            .name {
                text-decoration: none;
                font-size: 25px;
                color: #000;
                text-transform: uppercase;
                display: block;
                margin-bottom: 5px;
            }
    
            .attributes {
                span {
                    display: inline-block;
                    position: relative;
                    margin-right: 20px;
    
                    &:not(:last-child):before {
                        content: "";
                        position: absolute;
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background-color: #FDF600;
                        right: -12px;
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

    return (
        <ImageDetailStyle>
            <img className="image" src={ image } alt={ name }/>
            <div className="detail">
                { isMyPokemon && <div className="own-badge">Your Pokemon</div> }
                <div className="name">{ name }</div>
                <div className="attributes">
                    <span>
                        <img className="icon" src={ IconAttack } alt="Icon Attack" width="18" />
                        { attack }
                    </span>
                    <span>
                        <img className="icon" src={ IconHitPoint } alt="Icon Attack" width="17" />
                        { hitPoint }
                    </span>
                </div>
            </div>
        </ImageDetailStyle>
    )
}

export default ImageDetail
