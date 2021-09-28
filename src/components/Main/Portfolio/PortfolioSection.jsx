import React from 'react';
import Carde from './Carde';
import petSpot from '../../../assets/images/PetSpot.png';
import airbnbConsole from '../../../assets/images/AirBnB-TheConsole.png';
import smilingSchool from '../../../assets/images/SmilingSchool1.png';

const PortfolioSection = () => {
	const portfolioData = [
		{
			id: 1,
			title: 'PetSpot',
			img: petSpot,
			text: 'This project was developed as part of the final project of the foundation stage at Holberton School in a group of 4 students. It was our first full-stack programming project which consisted of 20 days. It was made using MERN stack (MongoDB, Express, React, and Node).',
			ghLink: 'https://github.com/BrianFs04/PetSpot/blob/master/README.md',
		},
		{
			id: 2,
			title: 'AirBnB - The Console',
			img: airbnbConsole,
			text: 'This project was the first part to create a clone of the functionality of AirBnB, done in partners using Python and its unittest module. It intended to create a basic console with some commands that allows the user to create, destroy, serialize/deserialize objects in JSON)',
			ghLink: 'https://github.com/BrianFs04/AirBnB_clone/blob/master/README.md',
		},
		{
			id: 3,
			title: 'Smiling School',
			img: smilingSchool,
			text: 'This project was a basic implementation of a web app using HTML, CSS, Bootstrap, JS and, jQuery. It was an interesting project since it was made starting from a mockup in Figma.',
			ghLink: 'https://github.com/BrianFs04/holberton-smiling-school-javascript/blob/master/README.md',
		},
	];
	return (
		<section id='portfolio' className='portfolio'>
			<div className='container' data-aos='fade-down'>
				<div className='text-center section-header'>
					<h2 className='title-text'>Portfolio</h2>
				</div>
				<div className='d-flex justify-content-evenly flex-wrap'>
					{portfolioData.map(({ id, title, img, text, ghLink }) => (
						<Carde
							key={id}
							title={title}
							img={img}
							text={text}
							ghLink={ghLink}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
