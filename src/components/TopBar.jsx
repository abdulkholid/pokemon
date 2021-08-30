import styled from '@emotion/styled';
import Logo from '../images/logo.png';

const TopBarStyle = styled.div`
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

    .text {
        margin-left: 10px;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
    }
`;

const TopBar = ({ page_title }) => {
    return (
        <TopBarStyle>
            <img src={Logo} width="45"/>
            <div className="text">{ page_title }</div>
        </TopBarStyle>
    )
}

export default TopBar
