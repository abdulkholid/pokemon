import Logo from '../images/logo.png';
import { TopBarContainer, TopBarText } from './TopBar.elements';

const TopBar = ({ page_title }) => {
    return (
        <TopBarContainer>
            <img src={Logo} width="45" alt="Logo"/>
            <TopBarText>{ page_title }</TopBarText>
        </TopBarContainer>
    )
}

export default TopBar
