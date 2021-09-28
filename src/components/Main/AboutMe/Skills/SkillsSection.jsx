import React from 'react';
import ProgressBar from './ProgressBar';

const SkillsSection = () => {
	const skillData = [
		{
			id: 1,
			text: 'HTML',
			percentage: 90,
		},
		{
			id: 2,
			text: 'CSS',
			percentage: 80,
		},
		{
			id: 3,
			text: 'JS',
			percentage: 75,
		},
		{
			id: 4,
			text: 'Python',
			percentage: 60,
		},
		{
			id: 5,
			text: 'NodeJS',
			percentage: 60,
		},
		{
			id: 6,
			text: 'ReactJS',
			percentage: 65,
		},
	];

	const theMiddle = Math.ceil(skillData.length / 2);

	return (
		<section id='skills' className='skills'>
			<div className='container' data-aos='fade-right'>
				<div className='text-center section-header'>
					<h2 className='title-text'>Skills</h2>
				</div>
				<div className='row'>
					<div className='col-lg-6'>
						{skillData
							.slice(0, theMiddle)
							.map(({ id, text, percentage }) => (
								<ProgressBar
									key={id}
									text={text}
									percent={percentage}
								/>
							))}
					</div>
					<div className='col-lg-6'>
						{skillData
							.slice(
								skillData.length % 2 === 1
									? -theMiddle + 1
									: -theMiddle
							)
							.map(({ id, text, percentage }) => (
								<ProgressBar
									key={id}
									text={text}
									percent={percentage}
								/>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
