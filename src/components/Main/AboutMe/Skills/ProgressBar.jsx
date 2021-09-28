import React, { useState, useEffect } from 'react';

const ProgressBar = ({ text, percent }) => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		setValue(percent);
	}, [percent]);

	return (
		<div className='progress'>
			<span className='skill'>
				{text} <i className='val'>{percent}%</i>
			</span>
			<div className='progress-div' style={{ width: '100%' }}>
				<div
					style={{ width: `${value}%` }}
					className='progress-loaded'
				/>
			</div>
		</div>
	);
};

export default ProgressBar;
