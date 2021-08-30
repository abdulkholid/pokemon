import IconCatchFailed from '../images/icon-catch-failed.svg';
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

const CatchResultModalStyle = styled.div`
    display: flex;
    position: fixed;
    z-index: 100;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #041F4F;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text {
        font-size: 17px;
        margin-top: 40px;
        margin-bottom: 25px;
        text-align: center;

        .name {
            font-size: 30px;
            font-weight: normal;
            margin-top: 15px;
            text-transform: capitalize;
        }
    }

    .input-text {
        width: 250px;
        font-size: 16px;
        padding: 15px 10px;
        margin-bottom: 20px;
        text-align: center;
        outline: none !important;
        border-radius: import { Link } from 'react-router-dom';
        border: 2px solid rgba(0, 0, 0, 0.2);
    }

    .btn {
        display: block;
        width: 250px;
        text-align: center;
        text-decoration: none;
        padding: 15px 10px;
        background-color: #FBD102;
        border: 3px solid #2A63AE;
        border-radius: 20px;
        color: #000;
        font-size: 15px;
        font-weight: 500;

        &.blue {
            background-color: #2A63AE;
            color: #fff;
        }
    }
`;

const Deleted = () => {
    return (
        <CatchResultModalStyle>
            <img src={ IconCatchFailed } alt="Icon Catch Failed" width="100" />
            <div className="text">
                You successfully remove the pokemon
            </div>
            <Link to="/my-pokemon" className="btn blue">Back to My Pokemon</Link>
        </CatchResultModalStyle>
    )
}

export default Deleted
