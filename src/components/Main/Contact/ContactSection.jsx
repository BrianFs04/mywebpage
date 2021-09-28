import React from 'react';
import FormEmail from './FormEmail';

const ContactSection = () => {
	return (
		<section id='contact' className='contact'>
			<div className='container'>
				<div className='text-center section-header'>
					<h2 className='title-text'>Contact</h2>
				</div>
				<div className='d-flex flex-column'>
					<FormEmail />
				</div>
				<div className='social-links d-flex justify-content-center flex-wrap'>
					<a
						href='https://twitter.com/BrayamFS'
						className='twitter m-4'
					>
						<i className='bx bxl-twitter'></i>
					</a>
					<a
						href='https://wa.me/573145015493'
						className='whatsapp m-4'
					>
						<i className='bx bxl-whatsapp'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/brian-florez/'
						className='linkedin m-4'
					>
						<i className='bx bxl-linkedin'></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
