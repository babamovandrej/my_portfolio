import React, { useState, useEffect } from "react";
import "./side-menu.css";

const menuItems = [
    { anchor: "about", name: "About" },
    { anchor: "skills", name: "Skills" },
    { anchor: "projects", name: "Projects" },
    { anchor: "contact", name: "Contact" }
];

const SideMenu = React.memo(() => {
    const [activeSection, setActiveSection] = useState(menuItems[0].anchor);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        const sections = menuItems.map((item) => document.getElementById(item.anchor));
        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className='side-menu'>
            <ul className='side-menu-list'>
                {menuItems.map((item) => (
                    <li
                        key={item.anchor}
                        data-menuanchor={item.anchor}
                        className={`side-menu-item ${activeSection === item.anchor ? "active" : ""}`}
                    >
                        <a href={`#${item.anchor}`}>
                        	<span className='side-menu-dot'></span>
                            <span className='side-menu-link-name'>{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default SideMenu;