import React from 'react';
import "./side-menu.css";

const menuItems = [
    { anchor: "about", name: "About" },
    { anchor: "skills", name: "Skills" },
    { anchor: "projects", name: "Projects" },
    { anchor: "contact", name: "Contact" }
];

const SideMenu = React.memo(() => {
    return (
        <div className="side-menu">
            <ul className="side-menu__list">
                {menuItems.map(item => (
                    <li key={item.anchor} data-menuanchor={item.anchor}>
                        <a href={`#${item.anchor}`}>
                            <span className="side-menu__dot"></span>
                            <span className="side-menu__link-name">{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default SideMenu;