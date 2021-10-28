(this['webpackJsonpmy-web-page'] = this['webpackJsonpmy-web-page'] || []).push([
	[0],
	{
		44: function (e, t) {},
		67: function (e, t, s) {},
		78: function (e, t) {},
		79: function (e, t) {},
		80: function (e, t) {},
		81: function (e, t) {},
		82: function (e, t) {},
		96: function (e, t, s) {
			'use strict';
			s.r(t);
			var n = s(0),
				c = s.n(n),
				i = s(12),
				a = s.n(i),
				r = (s(67), s(25)),
				o = (s(43), s(3)),
				l = function (e) {
					var t = e.href,
						s = e.bx,
						c = e.text,
						i = e.activate,
						a = e.onClick;
					return (
						Object(n.useEffect)(function () {
							var e =
									document.querySelectorAll(
										'#navbar .nav-link'
									),
								t = function () {
									var t = window.scrollY + 200;
									e.forEach(function (e) {
										if (e.hash) {
											var s = document.querySelector(
												e.hash
											);
											s &&
												(t >= s.offsetTop &&
												t <=
													s.offsetTop + s.offsetHeight
													? e.classList.add('active')
													: e.classList.remove(
															'active'
													  ));
										}
									});
								};
							return (
								document.addEventListener('scroll', t),
								function () {
									document.removeEventListener('scroll', t);
								}
							);
						}, []),
						Object(o.jsx)('li', {
							className: 'nav-item',
							children: Object(o.jsxs)('a', {
								href: t,
								className: i
									? 'nav-link active justify-content-center'
									: 'nav-link justify-content-center',
								onClick: a,
								children: [
									Object(o.jsx)('i', { className: s }),
									Object(o.jsx)('span', { children: c }),
								],
							}),
						})
					);
				},
				d = function () {
					var e = Object(n.useState)(0),
						t = Object(r.a)(e, 2),
						s = t[0],
						c = t[1];
					return Object(o.jsx)('nav', {
						id: 'navbar',
						className: 'navbar nav-menu',
						children: Object(o.jsx)('ul', {
							children: [
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
							].map(function (e, t) {
								var n = e.id,
									i = e.href,
									a = e.classes,
									r = e.bx,
									d = e.text;
								return Object(o.jsx)(
									l,
									{
										activate: s === t,
										href: i,
										classes: a,
										bx: r,
										text: d,
										onClick: function () {
											c(t);
										},
									},
									n
								);
							}),
						}),
					});
				},
				j = function () {
					return (
						Object(n.useEffect)(function () {
							document
								.querySelectorAll('.nav-link')
								.forEach(function (e) {
									return e.addEventListener(
										'click',
										function (e) {
											if (
												document.querySelector(
													this.hash
												)
											) {
												e.preventDefault();
												var t =
													document.querySelector(
														'body'
													);
												if (
													t.classList.contains(
														'mobile-nav-active'
													)
												) {
													t.classList.remove(
														'mobile-nav-active'
													);
													var s =
														document.querySelector(
															'.mobile-nav-toggle'
														);
													s.classList.toggle(
														'bx-list-ul'
													),
														s.classList.toggle(
															'bxs-x-square'
														);
												}
												window.scrollTo({
													top: document.querySelector(
														this.hash
													).offsetTop,
													behavior: 'smooth',
												});
											}
										}
									);
								}),
								document
									.querySelector('.mobile-nav-toggle')
									.addEventListener('click', function (e) {
										document
											.querySelector('body')
											.classList.toggle(
												'mobile-nav-active'
											),
											this.classList.toggle('bx-list-ul'),
											this.classList.toggle(
												'bxs-x-square'
											);
									});
						}, []),
						Object(o.jsxs)(o.Fragment, {
							children: [
								Object(o.jsx)('i', {
									className:
										'bx bx-list-ul mobile-nav-toggle d-flex d-md-none',
								}),
								Object(o.jsx)('header', {
									id: 'header',
									className:
										'd-flex flex-column justify-content-center',
									children: Object(o.jsx)(d, {}),
								}),
							],
						})
					);
				},
				b = s(47),
				m = s.n(b),
				x = function () {
					return (
						Object(n.useEffect)(function () {
							var e = new m.a('#typed', {
								strings: ['', 'engineer', 'developer'],
								loop: !0,
								typeSpeed: 100,
								backSpeed: 50,
							});
							return function () {
								e.destroy();
							};
						}, []),
						Object(o.jsx)('section', {
							id: 'hero',
							className:
								'd-flex flex-column justify-content-center',
							children: Object(o.jsxs)('div', {
								className: 'container',
								'data-aos': 'zoom-in',
								'data-aos-delay': '100',
								children: [
									Object(o.jsx)('h1', {
										children: 'Brayan Florez',
									}),
									Object(o.jsxs)('p', {
										children: [
											"I'm\xa0",
											Object(o.jsx)('span', {
												id: 'typed',
												children: ' ',
											}),
										],
									}),
								],
							}),
						})
					);
				},
				h = function (e) {
					var t = e.classes,
						s = e.title,
						n = e.text;
					return Object(o.jsxs)('li', {
						children: [
							Object(o.jsx)('i', { className: t }),
							Object(o.jsx)('strong', { children: s }),
							Object(o.jsx)('span', { children: n }),
						],
					});
				},
				u = function () {
					var e = [
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
							text: 'here',
						},
						{
							id: 3,
							classes: 'bx bxs-devices',
							title: 'Phone:',
							text: '+57 3145015493',
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
							text: 'brianflorezdev@gmail.com',
						},
						{
							id: 8,
							classes: 'bx bx-mouse-alt',
							title: 'Freelance:',
							text: 'Available',
						},
					];
					return Object(o.jsx)('section', {
						id: 'about',
						className: 'about',
						children: Object(o.jsxs)('div', {
							className: 'container',
							'data-aos': 'fade-left',
							children: [
								Object(o.jsxs)('div', {
									className: 'text-center section-header',
									children: [
										Object(o.jsx)('h2', {
											className: 'title-text',
											children: 'About me',
										}),
										Object(o.jsx)('p', {
											children:
												"Hi! I'm Brian a systems engineer currently living in Bogota, Colombia. My area of focus as a systems engineer is programming, I do love almost anything related to that.",
										}),
									],
								}),
								Object(o.jsxs)('div', {
									className: 'row section-content',
									children: [
										Object(o.jsx)('div', {
											className: 'col-lg-4',
										}),
										Object(o.jsxs)('div', {
											className: 'col-lg-8 pt-4 pt-lg-0',
											children: [
												Object(o.jsx)('h3', {
													children:
														'Systems engineer & software developer',
												}),
												Object(o.jsxs)('div', {
													className: 'row',
													children: [
														Object(o.jsx)('div', {
															className:
																'col-md-6',
															children: Object(
																o.jsx
															)('ul', {
																children: e
																	.slice(0, 4)
																	.map(
																		function (
																			e
																		) {
																			var t =
																					e.id,
																				s =
																					e.classes,
																				n =
																					e.title,
																				c =
																					e.text;
																			return Object(
																				o.jsx
																			)(
																				h,
																				{
																					classes:
																						s,
																					title: n,
																					text: c,
																				},
																				t
																			);
																		}
																	),
															}),
														}),
														Object(o.jsx)('div', {
															className:
																'col-md-6',
															children: Object(
																o.jsx
															)('ul', {
																children: e
																	.slice(-4)
																	.map(
																		function (
																			e
																		) {
																			var t =
																					e.id,
																				s =
																					e.classes,
																				n =
																					e.title,
																				c =
																					e.text;
																			return Object(
																				o.jsx
																			)(
																				h,
																				{
																					classes:
																						s,
																					title: n,
																					text: c,
																				},
																				t
																			);
																		}
																	),
															}),
														}),
													],
												}),
											],
										}),
									],
								}),
							],
						}),
					});
				},
				f = function (e) {
					var t = e.text,
						s = e.percent,
						c = Object(n.useState)(0),
						i = Object(r.a)(c, 2),
						a = i[0],
						l = i[1];
					return (
						Object(n.useEffect)(
							function () {
								l(s);
							},
							[s]
						),
						Object(o.jsxs)('div', {
							className: 'progress',
							children: [
								Object(o.jsxs)('span', {
									className: 'skill',
									children: [
										t,
										' ',
										Object(o.jsxs)('i', {
											className: 'val',
											children: [s, '%'],
										}),
									],
								}),
								Object(o.jsx)('div', {
									className: 'progress-div',
									style: { width: '100%' },
									children: Object(o.jsx)('div', {
										style: { width: ''.concat(a, '%') },
										className: 'progress-loaded',
									}),
								}),
							],
						})
					);
				},
				g = function () {
					var e = [
							{ id: 1, text: 'HTML', percentage: 90 },
							{ id: 2, text: 'CSS', percentage: 80 },
							{ id: 3, text: 'JS', percentage: 75 },
							{ id: 4, text: 'Python', percentage: 60 },
							{ id: 5, text: 'NodeJS', percentage: 60 },
							{ id: 6, text: 'ReactJS', percentage: 65 },
						],
						t = Math.ceil(e.length / 2);
					return Object(o.jsx)('section', {
						id: 'skills',
						className: 'skills',
						children: Object(o.jsxs)('div', {
							className: 'container',
							'data-aos': 'fade-right',
							children: [
								Object(o.jsx)('div', {
									className: 'text-center section-header',
									children: Object(o.jsx)('h2', {
										className: 'title-text',
										children: 'Skills',
									}),
								}),
								Object(o.jsxs)('div', {
									className: 'row',
									children: [
										Object(o.jsx)('div', {
											className: 'col-lg-6',
											children: e
												.slice(0, t)
												.map(function (e) {
													var t = e.id,
														s = e.text,
														n = e.percentage;
													return Object(o.jsx)(
														f,
														{ text: s, percent: n },
														t
													);
												}),
										}),
										Object(o.jsx)('div', {
											className: 'col-lg-6',
											children: e
												.slice(
													e.length % 2 === 1
														? 1 - t
														: -t
												)
												.map(function (e) {
													var t = e.id,
														s = e.text,
														n = e.percentage;
													return Object(o.jsx)(
														f,
														{ text: s, percent: n },
														t
													);
												}),
										}),
									],
								}),
							],
						}),
					});
				},
				v = s(132),
				p = s(129),
				O = s(134),
				N = s(136),
				w = s(135),
				y = Object(p.a)({ root: { maxWidth: 355 } }),
				k = function (e) {
					var t = e.title,
						s = e.img,
						n = e.text,
						c = e.ghLink,
						i = y();
					return Object(o.jsx)(v.a, {
						className: i.root,
						style: { margin: '30px 0' },
						children: Object(o.jsxs)(O.a, {
							component: 'a',
							href: c,
							title: t,
							target: '_blank',
							rel: 'noreferrer',
							style: { textDecoration: 'none', color: 'inherit' },
							className: 'portfolio-link',
							children: [
								Object(o.jsx)(w.a, {
									component: 'img',
									alt: t,
									height: '130',
									image: s,
									title: t,
								}),
								Object(o.jsxs)(N.a, {
									children: [
										Object(o.jsx)('h2', {
											className: 'portfolio-title',
											children: t,
										}),
										Object(o.jsx)('p', {
											className: 'portfolio-body',
											children: n,
										}),
									],
								}),
							],
						}),
					});
				},
				S = './static/media/PetSpot.30da56a8.png',
				B = './static/media/AirBnB-TheConsole.de10c4c2.png',
				L = './static/media/SmilingSchool1.e9db61c0.png',
				E = function () {
					var e = [
						{
							id: 1,
							title: 'PetSpot',
							img: S,
							text: 'This project was developed as part of the final project of the foundation stage at Holberton School in a group of 4 students. It was our first full-stack programming project which consisted of 20 days. It was made using MERN stack (MongoDB, Express, React, and Node).',
							ghLink: 'https://github.com/BrianFs04/PetSpot/blob/master/README.md',
						},
						{
							id: 2,
							title: 'AirBnB - The Console',
							img: B,
							text: 'This project was the first part to create a clone of the functionality of AirBnB, done in partners using Python and its unittest module. It intended to create a basic console with some commands that allows the user to create, destroy, serialize/deserialize objects in JSON)',
							ghLink: 'https://github.com/BrianFs04/AirBnB_clone/blob/master/README.md',
						},
						{
							id: 3,
							title: 'Smiling School',
							img: L,
							text: 'This project was a basic implementation of a web app using HTML, CSS, Bootstrap, JS and, jQuery. It was an interesting project since it was made starting from a mockup in Figma.',
							ghLink: 'https://github.com/BrianFs04/holberton-smiling-school-javascript/blob/master/README.md',
						},
					];
					return Object(o.jsx)('section', {
						id: 'portfolio',
						className: 'portfolio',
						children: Object(o.jsxs)('div', {
							className: 'container',
							'data-aos': 'fade-down',
							children: [
								Object(o.jsx)('div', {
									className: 'text-center section-header',
									children: Object(o.jsx)('h2', {
										className: 'title-text',
										children: 'Portfolio',
									}),
								}),
								Object(o.jsx)('div', {
									className:
										'd-flex justify-content-evenly flex-wrap',
									children: e.map(function (e) {
										var t = e.id,
											s = e.title,
											n = e.img,
											c = e.text,
											i = e.ghLink;
										return Object(o.jsx)(
											k,
											{
												title: s,
												img: n,
												text: c,
												ghLink: i,
											},
											t
										);
									}),
								}),
							],
						}),
					});
				},
				C = s(29),
				T = './static/media/Dev_BrayanFlorez_CV.7cccfa3c.pdf';
			C.c.GlobalWorkerOptions.workerSrc =
				'//cdnjs.cloudflare.com/ajax/libs/pdf.js/'.concat(
					C.c.version,
					'/pdf.worker.min.js'
				);
			var D = function () {
					return Object(o.jsx)('section', {
						id: 'resume',
						className: 'resume',
						children: Object(o.jsxs)('div', {
							className: 'container',
							'data-aos': 'fade-down',
							children: [
								Object(o.jsx)('div', {
									className: 'text-center section-header',
									children: Object(o.jsx)('h2', {
										className: 'title-text',
										children: 'Resume',
									}),
								}),
								Object(o.jsx)('div', {
									id: 'resumeContainer',
									className: 'd-none d-md-block',
									children: Object(o.jsx)(C.a, {
										className: 'PDFDocument',
										file: T,
										onLoadSuccess: null,
										children: Object(o.jsx)(C.b, {
											className: 'PDFPage',
											pageNumber: 1,
											width: 800,
											children: Object(o.jsx)('div', {
												className: 'PDFDownload',
												children: Object(o.jsxs)('a', {
													href: 'https://drive.google.com/uc?export=download&id=1eJqTa4wSV00wQQUq6K8efnai45dLc3Pt',
													target: '_blank',
													rel: 'noreferrer',
													children: [
														Object(o.jsx)('i', {
															className:
																'bx bxs-file-pdf',
														}),
														Object(o.jsx)(
															'strong',
															{
																children:
																	'Download',
															}
														),
													],
												}),
											}),
										}),
									}),
								}),
								Object(o.jsx)('div', {
									className:
										'd-flex d-md-none justify-content-center',
									children: Object(o.jsx)('div', {
										className: 'PDFDownloadMD',
										children: Object(o.jsxs)('a', {
											href: 'https://drive.google.com/uc?export=download&id=1eJqTa4wSV00wQQUq6K8efnai45dLc3Pt',
											target: '_blank',
											rel: 'noreferrer',
											children: [
												Object(o.jsx)('i', {
													className:
														'bx bxs-file-pdf',
												}),
												Object(o.jsx)('strong', {
													children: 'Download',
												}),
											],
										}),
									}),
								}),
							],
						}),
					});
				},
				q = s(34),
				A = s(39),
				P = s(54),
				_ = s(138),
				F = s(137),
				M = s(40),
				R = s.n(M),
				W = function () {
					var e = Object(n.useState)({
							from_email: '',
							from_name: '',
							message: '',
						}),
						t = Object(r.a)(e, 2),
						s = t[0],
						c = t[1],
						i = function (e) {
							c(
								Object(A.a)(
									Object(A.a)({}, s),
									{},
									Object(q.a)(
										{},
										e.target.name,
										e.target.value
									)
								)
							);
						};
					return Object(o.jsxs)('form', {
						onSubmit: function (e) {
							e.preventDefault(),
								Object(P.a)(
									'service_ljbcari',
									'template_6wkshlh',
									s,
									'user_6K11Tg9j9xYGtVY4wNqHu'
								)
									.then(function (e) {
										R.a.fire({
											title: 'Sent',
											text: "Thanks for your message, you'll receive a reply soon",
											icon: 'success',
											iconColor: '#0563bb',
											confirmButtonColor: '#0563bb',
											confirmButtonText: 'Ok',
										});
									})
									.catch(function (e) {
										R.a.fire({
											title: 'Error',
											text: 'There was an error sending the message, try again later',
											icon: 'error',
											confirmButtonText: 'ok',
											confirmButtonColor: '#cb3234',
										});
									}),
								c({
									from_email: '',
									from_name: '',
									message: '',
								});
						},
						className: 'd-flex flex-column',
						children: [
							Object(o.jsxs)('div', {
								className: 'row',
								children: [
									Object(o.jsx)('div', {
										className: 'col-lg-6',
										children: Object(o.jsx)(_.a, {
											id: 'outlined-basic',
											label: 'Your name',
											variant: 'outlined',
											type: 'text',
											name: 'from_name',
											value: s.from_name,
											onChange: i,
											className: 'mt-3 w-100',
										}),
									}),
									Object(o.jsx)('div', {
										className: 'col-lg-6',
										children: Object(o.jsx)(_.a, {
											id: 'outlined-basic',
											label: 'Your email',
											variant: 'outlined',
											type: 'email',
											name: 'from_email',
											value: s.from_email,
											onChange: i,
											className: 'mt-3 w-100',
											required: !0,
										}),
									}),
								],
							}),
							Object(o.jsx)(_.a, {
								id: 'outlined-basic',
								label: 'Your message',
								variant: 'outlined',
								type: 'text',
								name: 'message',
								multiline: !0,
								value: s.message,
								onChange: i,
								className: 'mt-3',
								required: !0,
							}),
							Object(o.jsx)(F.a, {
								type: 'submit',
								variant: 'outlined',
								className: 'my-4 align-self-center sendBtn',
								endIcon: Object(o.jsx)('i', {
									className: 'bx bxs-send',
								}),
								children: 'Submit',
							}),
						],
					});
				},
				I = function () {
					return Object(o.jsx)('section', {
						id: 'contact',
						className: 'contact',
						children: Object(o.jsxs)('div', {
							className: 'container',
							children: [
								Object(o.jsx)('div', {
									className: 'text-center section-header',
									children: Object(o.jsx)('h2', {
										className: 'title-text',
										children: 'Contact',
									}),
								}),
								Object(o.jsx)('div', {
									className: 'd-flex flex-column',
									children: Object(o.jsx)(W, {}),
								}),
								Object(o.jsxs)('div', {
									className:
										'social-links d-flex justify-content-center flex-wrap',
									children: [
										Object(o.jsx)('a', {
											href: 'https://twitter.com/BrayamFS',
											className: 'twitter m-4',
											children: Object(o.jsx)('i', {
												className: 'bx bxl-twitter',
											}),
										}),
										Object(o.jsx)('a', {
											href: 'https://wa.me/573145015493',
											className: 'whatsapp m-4',
											children: Object(o.jsx)('i', {
												className: 'bx bxl-whatsapp',
											}),
										}),
										Object(o.jsx)('a', {
											href: 'https://www.linkedin.com/in/brian-florez/',
											className: 'linkedin m-4',
											children: Object(o.jsx)('i', {
												className: 'bx bxl-linkedin',
											}),
										}),
									],
								}),
							],
						}),
					});
				},
				J = function () {
					return Object(o.jsxs)('main', {
						id: 'main',
						children: [
							Object(o.jsx)(u, {}),
							Object(o.jsx)(g, {}),
							Object(o.jsx)(E, {}),
							Object(o.jsx)(D, {}),
							Object(o.jsx)(I, {}),
						],
					});
				},
				z = function () {
					return Object(o.jsx)('footer', {
						id: 'footer',
						children: Object(o.jsxs)('div', {
							className:
								'container d-flex align-items-center flex-column',
							children: [
								Object(o.jsx)('h3', {
									children: 'Brayan Florez',
								}),
								Object(o.jsx)('p', {
									children:
										'Systems enginner and software developer',
								}),
								Object(o.jsx)('div', {
									className: 'copyright',
									children:
										'\xa9 Copyright - All Rights Reserved',
								}),
							],
						}),
					});
				};
			var H = function () {
					return Object(o.jsxs)(o.Fragment, {
						children: [
							Object(o.jsx)(j, {}),
							Object(o.jsx)(x, {}),
							Object(o.jsx)(J, {}),
							Object(o.jsx)(z, {}),
						],
					});
				},
				Y = Boolean(
					'localhost' === window.location.hostname ||
						'[::1]' === window.location.hostname ||
						window.location.hostname.match(
							/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
						)
				);
			function Q(e, t) {
				navigator.serviceWorker
					.register(e)
					.then(function (e) {
						e.onupdatefound = function () {
							var s = e.installing;
							null != s &&
								(s.onstatechange = function () {
									'installed' === s.state &&
										(navigator.serviceWorker.controller
											? (console.log(
													'New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.'
											  ),
											  t && t.onUpdate && t.onUpdate(e))
											: (console.log(
													'Content is cached for offline use.'
											  ),
											  t &&
													t.onSuccess &&
													t.onSuccess(e)));
								});
						};
					})
					.catch(function (e) {
						console.error(
							'Error during service worker registration:',
							e
						);
					});
			}
			s(94);
			var U = s(53),
				V = s.n(U);
			s(95);
			V.a.init(),
				a.a.render(
					Object(o.jsx)(c.a.StrictMode, {
						children: Object(o.jsx)(H, {}),
					}),
					document.getElementById('root')
				),
				(function (e) {
					if ('serviceWorker' in navigator) {
						if (
							new URL('', window.location.href).origin !==
							window.location.origin
						)
							return;
						window.addEventListener('load', function () {
							var t = ''.concat('', '/service-worker.js');
							Y
								? (!(function (e, t) {
										fetch(e, {
											headers: {
												'Service-Worker': 'script',
											},
										})
											.then(function (s) {
												var n =
													s.headers.get(
														'content-type'
													);
												404 === s.status ||
												(null != n &&
													-1 ===
														n.indexOf('javascript'))
													? navigator.serviceWorker.ready.then(
															function (e) {
																e.unregister().then(
																	function () {
																		window.location.reload();
																	}
																);
															}
													  )
													: Q(e, t);
											})
											.catch(function () {
												console.log(
													'No internet connection found. App is running in offline mode.'
												);
											});
								  })(t, e),
								  navigator.serviceWorker.ready.then(
										function () {
											console.log(
												'This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA'
											);
										}
								  ))
								: Q(t, e);
						});
					}
				})();
		},
	},
	[[96, 1, 2]],
]);
//# sourceMappingURL=main.d43fbe9f.chunk.js.map
