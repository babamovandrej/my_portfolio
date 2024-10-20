import "./contact.css";

function Contact() {
	return (
		<div className='contact-container'>
			<div className='contact-text'>
				<p>
					Want to build something <span className='highlight'>cool</span> together?
				</p>
				<p>Let's connect!</p>
			</div>

			<div className='links-container'>
				<div className='contact-link'>
					<a href='/'>
						<p>Email</p>
					</a>
				</div>
				<div className='contact-link'>
					<a href='/'>
						<p>Telegram</p>
					</a>
				</div>
				<div className='contact-link '>
					<a href='/'>
						<p>Discord</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
