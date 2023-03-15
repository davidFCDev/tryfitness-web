import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import './form.css';

const Form = () => {
	const [accepted, setAccepted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleContactClick = () => {
		window.scrollTo(0, 0);
	};

	const handleSubmit = async event => {
		event.preventDefault();
		const { name, surname, email, phone } = event.target;
		if (!name.value || !surname.value || !email.value || !phone.value) {
			toast.error('Por favor, completa todos los campos requeridos');
			return;
		}
		if (!accepted) {
			toast.error('Debes aceptar la política de privacidad primero!');
			return;
		}
		setIsSubmitting(true);
		try {
			const response = await axios.post('https://formspree.io/f/xdovznrd', {
				name: event.target.name.value,
				surname: event.target.surname.value,
				email: event.target.email.value,
				phone: event.target.phone.value,
			});
			toast.success('Enviado correctamente');
			console.log('Formulario enviado', response.data);
			event.target.name.value = '';
			event.target.surname.value = '';
			event.target.email.value = '';
			event.target.phone.value = '';
			setAccepted(false);
		} catch (error) {
			console.error('Error al enviar formulario', error);
		}
		setIsSubmitting(false);
	};

	const handleCheckboxChange = () => {
		setAccepted(!accepted);
	};

	return (
		<form onSubmit={handleSubmit} className='form'>
			<h2>
				¿Te apetece probar?
			</h2>
			<input
				type='text'
				placeholder='Nombre'
				name='name'
                className='input'
			/>
			<input
				type='text'
				placeholder='Apellido'
				name='surname'
                className='input'
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
                className='input'
			/>
			<input
				type='text'
				placeholder='Teléfono'
				name='phone'
                className='input'
			/>
			<div className='inputcheck'>
				<input
					type='checkbox'
					checked={accepted}
					onChange={handleCheckboxChange}
				/>
				<Link
					to={{ pathname: '/privacity', hash: '#top' }}
                    onClick={(event) => {
                        if (!window.confirm('¿Quieres acceder a la política de privacidad?')) {
							event.preventDefault();
						}
						handleContactClick()
                    }}
				>
					<span>
						Acepto política de privacidad
					</span>
				</Link>
			</div>
			<button
				type='submit'
				disabled={isSubmitting}
				id='btn-form'
			>
				{isSubmitting ? 'Enviando...' : 'Enviar'}
			</button>
		</form>
	);
};

export default Form;
