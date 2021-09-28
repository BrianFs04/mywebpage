import React, { useEffect } from 'react';
import 'boxicons';

const NavBarItems = ({ href, bx, text, activate, onClick }) => {
	useEffect(() => {
		// Nav links set state to active while scrolling
		let navbarlinks = document.querySelectorAll('#navbar .nav-link');
		const navbarlinksActive = () => {
			let position = window.scrollY + 200;
			navbarlinks.forEach((navbarlink) => {
				if (!navbarlink.hash) return;
				let section = document.querySelector(navbarlink.hash);
				if (!section) return;
				if (
					position >= section.offsetTop &&
					position <= section.offsetTop + section.offsetHeight
				) {
					navbarlink.classList.add('active');
				} else {
					navbarlink.classList.remove('active');
				}
			});
		};
		document.addEventListener('scroll', navbarlinksActive);

		return () => {
			document.removeEventListener('scroll', navbarlinksActive);
		};
	}, []);
	return (
		<li className='nav-item'>
			<a
				href={href}
				className={
					activate
						? 'nav-link active justify-content-center'
						: 'nav-link justify-content-center'
				}
				onClick={onClick}
			>
				<i className={bx}></i>
				<span>{text}</span>
			</a>
		</li>
	);
};

export default NavBarItems;
