import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { TextField, Button } from '@material-ui/core';
import Swal from 'sweetalert2';

const userID = 'user_6K11Tg9j9xYGtVY4wNqHu';

const FormEmail = () => {
	const [toSend, setToSend] = useState({
		from_email: '',
		from_name: '',
		message: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		send('service_ljbcari', 'template_6wkshlh', toSend, userID)
			.then((response) => {
				Swal.fire({
					title: 'Sent',
					text: "Thanks for your message, you'll receive a reply soon",
					icon: 'success',
					iconColor: '#0563bb',
					confirmButtonColor: '#0563bb',
					confirmButtonText: 'Ok',
				});
			})
			.catch((err) => {
				Swal.fire({
					title: 'Error',
					text: 'There was an error sending the message, try again later',
					icon: 'error',
					confirmButtonText: 'ok',
					confirmButtonColor: '#cb3234',
				});
			});
		setToSend({
			from_email: '',
			from_name: '',
			message: '',
		});
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={onSubmit} className='d-flex flex-column'>
			<div className='row'>
				<div className='col-lg-6'>
					<TextField
						id='outlined-basic'
						label='Your name'
						variant='outlined'
						type='text'
						name='from_name'
						value={toSend.from_name}
						onChange={handleChange}
						className='mt-3 w-100'
					/>
				</div>
				<div className='col-lg-6'>
					<TextField
						id='outlined-basic'
						label='Your email'
						variant='outlined'
						type='email'
						name='from_email'
						value={toSend.from_email}
						onChange={handleChange}
						className='mt-3 w-100'
						required={true}
					/>
				</div>
			</div>
			<TextField
				id='outlined-basic'
				label='Your message'
				variant='outlined'
				type='text'
				name='message'
				multiline={true}
				value={toSend.message}
				onChange={handleChange}
				className='mt-3'
				required={true}
			/>
			<Button
				type='submit'
				variant='outlined'
				className='my-4 align-self-center sendBtn'
				endIcon={<i className='bx bxs-send'></i>}
			>
				Submit
			</Button>
		</form>
	);
};

export default FormEmail;
