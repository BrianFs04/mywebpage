import React, { useEffect } from 'react';
import NavBar from './NavBar/NavBar';

const Header = () => {
	useEffect(() => {
		document.querySelectorAll('.nav-link').forEach((e) =>
			e.addEventListener('click', function (e) {
				if (document.querySelector(this.hash)) {
					e.preventDefault();

					let body = document.querySelector('body');
					if (body.classList.contains('mobile-nav-active')) {
						body.classList.remove('mobile-nav-active');
						let navbarToggle =
							document.querySelector('.mobile-nav-toggle');
						navbarToggle.classList.toggle('bx-list-ul');
						navbarToggle.classList.toggle('bxs-x-square');
					}
					window.scrollTo({
						top: document.querySelector(this.hash).offsetTop,
						behavior: 'smooth',
					});
				}
			})
		);
		document
			.querySelector('.mobile-nav-toggle')
			.addEventListener('click', function (e) {
				document
					.querySelector('body')
					.classList.toggle('mobile-nav-active');
				this.classList.toggle('bx-list-ul');
				this.classList.toggle('bxs-x-square');
			});
	}, []);
	return (
		<>
			<i className='bx bx-list-ul mobile-nav-toggle d-flex d-md-none'></i>
			<header
				id='header'
				className='d-flex flex-column justify-content-center'
			>
				<NavBar />
			</header>
		</>
	);
};

export default Header;
