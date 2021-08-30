import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Logo from '../images/logo.png';
import IconBack from '../images/icon-back.svg';

const TopBarDetail = () => {
    const TopBarDetailStyle = styled.div`
        background-color: #fff;
        padding: 10px 20px 0px;

        .row {
            display: flex;

            .left, .right {
                width: 50%;
                display: flex;
                align-items: center;
            }
            .right {
                justify-content: flex-end;
            }
        }
    `;

    return (
        <div className="container">
            <TopBarDetailStyle>
                <div className="row">
                    <div className="left">
                        <Link to="/"><img src={ IconBack } alt="Icon Back" width="25"/></Link>
                    </div>
                    <div className="right">
                        <img src={ Logo } alt="Logo" width="45"/>
                    </div>
                </div>
            </TopBarDetailStyle>
        </div>
    )
}

export default TopBarDetail
