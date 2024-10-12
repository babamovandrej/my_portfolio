import "./hamburger-menu.css";
import { useState } from "react";

const menuItems = ["About", "Portfolio", "Hire me", "Curiculum Vitae"];

function renderMenuItems() {
	return menuItems.map((item, index) => (
		<li key={index}>
			<a href='#'>{item}</a>
		</li>
	));
}

function HamburgerMenu() {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!isOpen);
	};

	return (
		<div className='menu-wrap'>
			<div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className={`menu ${isOpen ? "open" : ""}`}>
				<button className='close-menu' onClick={toggleMenu}>
					X
				</button>
				<ul>{renderMenuItems()}</ul>
			</div>
		</div>
	);
}

export default HamburgerMenu;
