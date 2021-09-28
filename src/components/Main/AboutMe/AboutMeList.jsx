import React from 'react';

const AboutMeList = ({ classes, title, text }) => {
	return (
		<li>
			<i className={classes}></i>
			<strong>{title}</strong>
			<span>{text}</span>
		</li>
	);
};

export default AboutMeList;
