import IconAttack from '../images/icon-attack.svg';
import IconHitPoint from '../images/icon-hitpoint.svg';
import { ImageDetailStyle } from './ImageDetail.elements';

const ImageDetail = ({ id, name, image, attack, hitPoint, isMyPokemon }) => {
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
