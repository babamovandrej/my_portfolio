import "./contact.css";

function Contact() {
	return (
		<div className='contact-container'>
			<div className="contact-spheres">
				<div className="sphere sphere-1">
					<img src="/social-icons/Calendly.svg" alt="linkedin" />
				</div>
				<div className="sphere sphere-2">
					<img src="/social-icons/Telegram.svg" alt="linkedin" />
				</div>
				<div className="sphere sphere-2">
					<img src="/social-icons/Discord.svg" alt="linkedin" />
				</div>
			</div>
			<p>Let's build something <span className='highlight'>cool</span> together!</p>
		</div>
	);
}

export default Contact;
