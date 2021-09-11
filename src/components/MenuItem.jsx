import { MenuItemStyle } from './MenuItems.elements';

const MenuItem = ({ text, url, isActive, icon, counter }) => {
    return (
        <MenuItemStyle to={ url } className={ isActive ? 'active' : '' }>
            { icon }
            { text }
        </MenuItemStyle>
    );
}

export default MenuItem;