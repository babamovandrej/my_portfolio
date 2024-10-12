import "./hero.css";

import Button from "../../components/button/button";

function Hero() {
	return (
		<div className='hero-container'>
			<div className='hero-content'>
				<hero className='hero-heading'>
					<p>Creating solutions</p>
				</hero>
				<div className='hero-subheading'>
					<p>
						Bringing innovation to everyone. My work bridges the gap between developers, power users, and
						newcomers alike.
					</p>
				</div>
				<div className='hero-action'>
					<Button text='Download CV' onClick={() => {}} type='standard' />
				</div>
			</div>
		</div>
	);
}

export default Hero;
