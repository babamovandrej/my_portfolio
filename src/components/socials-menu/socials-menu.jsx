import React from "react";
import "./socials-menu.css";

const socialLinks = [
	{ href: "https://www.facebook.com/andrej.babamov", src: "/social-icons/Facebook.svg", alt: "Facebook" },
	{ href: "https://github.com/babamovandrej", src: "/social-icons/Github.svg", alt: "Github" },
	{ href: "https://www.instagram.com/andrejbabamov/", src: "/social-icons/Instagram.svg", alt: "Instagram" },
	{
		href: "https://www.linkedin.com/in/andrej-babamov-28b35a183/",
		src: "/social-icons/LinkedIn.svg",
		alt: "LinkedIn"
	}
];

const SocialsMenu = React.memo(() => {
	return (
		<div className='socials-menu'>
			{socialLinks.map((link) => (
				<a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer'>
					<img src={link.src} alt={link.alt} />
				</a>
			))}
		</div>
	);
});

export default SocialsMenu;
