import React, { useState } from 'react';
import NavBarItems from './NavBarItems';

const NavBar = () => {
	const [active, setActive] = useState(0);

	const toggleClass = (index) => {
		setActive(index);
	};

	const data = [
		{
			id: 1,
			href: '#hero',
			bx: 'bx bx-home',
			text: 'Home',
		},
		{
			id: 2,
			href: '#about',
			bx: 'bx bx-user',
			text: 'About me',
		},
		{
			id: 3,
			href: '#portfolio',
			bx: 'bx bx-book-content',
			text: 'Portfolio',
		},
		{
			id: 4,
			href: '#resume',
			bx: 'bx bx-file-blank',
			text: 'Resume',
		},
		{
			id: 5,
			href: '#contact',
			bx: 'bx bx-envelope',
			text: 'Contact',
		},
	];

	return (
		<nav id='navbar' className='navbar nav-menu'>
			<ul>
				{data.map(({ id, href, classes, bx, text }, i) => {
					return (
						<NavBarItems
							key={id}
							activate={active === i}
							href={href}
							classes={classes}
							bx={bx}
							text={text}
							onClick={() => toggleClass(i)}
						/>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
