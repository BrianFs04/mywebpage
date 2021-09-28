import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
	useEffect(() => {
		const options = {
			strings: ['', 'engineer', 'developer'],
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
		};

		const typed = new Typed('#typed', options);

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<section
			id='hero'
			className='d-flex flex-column justify-content-center'
		>
			<div className='container' data-aos='zoom-in' data-aos-delay='100'>
				<h1>Brayan Florez</h1>
				<p>
					I'm&nbsp;
					<span id='typed'> </span>
				</p>
			</div>
		</section>
	);
};

export default Hero;
