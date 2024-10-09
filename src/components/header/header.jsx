import "./header.css";
import HamburgerMenu from "../hamburger-menu/hamburger-menu";

const navItems = [
    { name: "About", visible: true },
    { name: "Portfolio", visible: true },
    { name: "Hire Me", visible: true }
];

function renderNavItems() {
    return navItems.map((item, index) => (
        <div key={index} className={`nav-item ${item.visible ? "nav-item--visible" : "nav-item--hidden"}`}>
            {item.name}
        </div>
    ));
}

function Header() {
    return (
        <div className='header'>
            <div className='header__toolbar'>
                <div className='header__logo'>
                    <img src='/Logo.svg' alt='logo' />
                </div>
                <div className='header__navigation'>
                    {renderNavItems()}
                    <div className='nav-item nav-item--hidden'>
                        <HamburgerMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;