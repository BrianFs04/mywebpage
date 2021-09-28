import React from 'react';
import AboutMeList from './AboutMeList';

const AboutMeSection = () => {
	const listData = [
		{
			id: 1,
			classes: 'bx bxs-cake',
			title: 'Birthday:',
			text: '4 Nov 1996',
		},
		{
			id: 2,
			classes: 'bx bx-world',
			title: 'Website:',
			text: 'herethelink',
		},
		{
			id: 3,
			classes: 'bx bxs-devices',
			title: 'Phone:',
			text: '+57 3114443235',
		},
		{
			id: 4,
			classes: 'bx bx-map-pin',
			title: 'City:',
			text: 'Bogota, Colombia',
		},
		{
			id: 5,
			classes: 'bx bxs-calendar-check',
			title: 'Age:',
			text: '24',
		},
		{
			id: 6,
			classes: 'bx bxs-graduation',
			title: 'Degree:',
			text: 'Systems engineer',
		},
		{
			id: 7,
			classes: 'bx bx-mail-send',
			title: 'Email:',
			text: 'email@email.com',
		},
		{
			id: 8,
			classes: 'bx bx-mouse-alt',
			title: 'Freelance:',
			text: 'Available',
		},
	];
	return (
		<section id='about' className='about'>
			<div className='container' data-aos='fade-left'>
				<div className='text-center section-header'>
					<h2 className='title-text'>About me</h2>
					<p>
						Hi! I'm Brian a systems engineer currently living in
						Bogota, Colombia. My area of focus as a systems engineer
						is programming, I do love almost anything related to
						that.
					</p>
				</div>
				<div className='row section-content'>
					<div className='col-lg-4'></div>
					<div className='col-lg-8 pt-4 pt-lg-0'>
						<h3>Systems engineer &#38; software developer</h3>
						<div className='row'>
							<div className='col-md-6'>
								<ul>
									{listData
										.slice(0, 4)
										.map(({ id, classes, title, text }) => (
											<AboutMeList
												key={id}
												classes={classes}
												title={title}
												text={text}
											/>
										))}
								</ul>
							</div>
							<div className='col-md-6'>
								<ul>
									{listData
										.slice(-4)
										.map(({ id, classes, title, text }) => (
											<AboutMeList
												key={id}
												classes={classes}
												title={title}
												text={text}
											/>
										))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMeSection;
