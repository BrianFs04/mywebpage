(this['webpackJsonpmy-web-page'] = this['webpackJsonpmy-web-page'] || []).push([
	[0],
	{
		105: function (e, t) {},
		106: function (e, t) {},
		107: function (e, t) {},
		108: function (e, t) {},
		109: function (e, t) {},
		114: function (e, t, s) {
			s.r(t);
			var n = s(0),
				c = s.n(n),
				i = s(13),
				a = s.n(i),
				r = (s(80), s(26)),
				o = (s(47), s(3)),
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
				b = s(60),
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
				v = s(150),
				p = s(147),
				O = s(152),
				N = s(154),
				w = s(153),
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
				S = s.p + '../media/PetSpot.30da56a8.png',
				B = s.p + '../media/AirBnB-TheConsole.de10c4c2.png',
				E = s.p + '../media/SmilingSchool1.e9db61c0.png',
				L = function () {
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
							img: E,
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
				C = s(30),
				D = s.p + 'static/media/myresume.7951912c.pdf';
			C.c.GlobalWorkerOptions.workerSrc =
				'//cdnjs.cloudflare.com/ajax/libs/pdf.js/'.concat(
					C.c.version,
					'/pdf.worker.min.js'
				);
			var T = function () {
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
										file: D,
										onLoadSuccess: null,
										children: Object(o.jsx)(C.b, {
											className: 'PDFPage',
											pageNumber: 1,
											width: 800,
											children: Object(o.jsx)('div', {
												className: 'PDFDownload',
												children: Object(o.jsxs)('a', {
													href: 'https://drive.google.com/uc?export=download&id=1uid9ZYQ3IXcuSQZ2XhXNgihEy1n76GYS',
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
											href: 'https://drive.google.com/uc?export=download&id=1uid9ZYQ3IXcuSQZ2XhXNgihEy1n76GYS',
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
				A = s(38),
				P = s(43),
				_ = s(67),
				q = s(156),
				F = s(155),
				I = s(44),
				M = s.n(I),
				R = function () {
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
								Object(P.a)(
									Object(P.a)({}, s),
									{},
									Object(A.a)(
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
								Object(_.a)(
									'service_ljbcari',
									'template_6wkshlh',
									s,
									'user_6K11Tg9j9xYGtVY4wNqHu'
								)
									.then(function (e) {
										M.a.fire({
											title: 'Sent',
											text: "Thanks for your message, you'll receive a reply soon",
											icon: 'success',
											iconColor: '#0563bb',
											confirmButtonColor: '#0563bb',
											confirmButtonText: 'Ok',
										});
									})
									.catch(function (e) {
										M.a.fire({
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
										children: Object(o.jsx)(q.a, {
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
										children: Object(o.jsx)(q.a, {
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
							Object(o.jsx)(q.a, {
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
				W = function () {
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
									children: Object(o.jsx)(R, {}),
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
				Y = function () {
					return Object(o.jsxs)('main', {
						id: 'main',
						children: [
							Object(o.jsx)(u, {}),
							Object(o.jsx)(g, {}),
							Object(o.jsx)(L, {}),
							Object(o.jsx)(T, {}),
							Object(o.jsx)(W, {}),
						],
					});
				},
				H = function () {
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
			var J = function () {
					return Object(o.jsxs)(o.Fragment, {
						children: [
							Object(o.jsx)(j, {}),
							Object(o.jsx)(x, {}),
							Object(o.jsx)(Y, {}),
							Object(o.jsx)(H, {}),
						],
					});
				},
				z = Boolean(
					'localhost' === window.location.hostname ||
						'[::1]' === window.location.hostname ||
						window.location.hostname.match(
							/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
						)
				);
			function X(e, t) {
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
			s(112);
			var Q = s(66),
				G = s.n(Q);
			s(113);
			G.a.init(),
				a.a.render(
					Object(o.jsx)(c.a.StrictMode, {
						children: Object(o.jsx)(J, {}),
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
							z
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
													: X(e, t);
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
								: X(t, e);
						});
					}
				})();
		},
		59: function (e, t) {},
		80: function (e, t, s) {},
	},
	[[114, 1, 2]],
]);
//# sourceMappingURL=main.d7a342da.chunk.js.map
