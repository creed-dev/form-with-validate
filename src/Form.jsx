import React from 'react';
import { useFormik } from 'formik';
import { Button, Switch } from '@material-ui/core';
import closeIcon from './img/close.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import validate from './validateForm';

const Form = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			product: '',
			totalCount: null,
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const [count, setCount] = useState(0);
	const [closed, setClosed] = useState(false);

	useEffect(() => {
		let countValue = null;
		countValue = formik.values.product;
		if (formik.values.plus100) {
			countValue = parseInt(countValue) + 100;
		}
		if (formik.values.plus200) {
			countValue = parseInt(countValue) + 200;
		}
		setCount(countValue);
		formik.values.totalCount = countValue;
	}, [formik.values]);

	return (
		<form
			className={closed ? 'close__form' : 'form'}
			onSubmit={formik.handleSubmit}
		>
			<div className="form__top-wrapper">
				<div className="form__title">Title Form</div>
				<img
					onClick={() => setClosed(true)}
					src={closeIcon}
					alt="close"
					className="form__close"
				/>
			</div>
			<input
				className="form__input"
				id="firstName"
				name="firstName"
				type="text"
				placeholder="First Name *"
				onChange={formik.handleChange}
				value={formik.values.firstName}
				onBlur={formik.handleBlur}
			/>
			{formik.touched.firstName && formik.errors.firstName ? (
				<div>
					<div className="validate__block"></div>
					<div className="validate__text">{formik.errors.firstName}</div>
				</div>
			) : null}
			<input
				className="form__input"
				id="lastName"
				name="lastName"
				type="text"
				placeholder="Last Name *"
				onChange={formik.handleChange}
				value={formik.values.lastName}
				onBlur={formik.handleBlur}
			/>
			{formik.touched.lastName && formik.errors.lastName ? (
				<div>
					<div className="validate__block"></div>
					<div className="validate__text">{formik.errors.lastName}</div>
				</div>
			) : null}
			<input
				className="form__input"
				id="email"
				name="email"
				type="text"
				placeholder="user@gmail.com *"
				onChange={formik.handleChange}
				value={formik.values.email}
				onBlur={formik.handleBlur}
			/>
			{formik.errors.email && formik.touched.email ? (
				<div>
					<div className="validate__block"></div>
					<div className="validate__text">{formik.errors.email}</div>
				</div>
			) : null}
			<div className="form__select">
				<div>Product type *</div>
				<select
					className="form__select-menu"
					id="product"
					name="product"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				>
					<option value="">Select product type</option>
					<option value="50">Product 50$</option>
					<option value="100">Product 100$</option>
					<option value="300">Product 300$</option>
				</select>
			</div>
			{formik.touched.product && formik.errors.product ? (
				<div>
					<div className="validate__block validate__block_product"></div>
					<div className="validate__text">{formik.errors.product}</div>
				</div>
			) : null}
			<div className="form__plus">
				<div className="form__plus-text">Additinal feature for 100$</div>
				<Switch color="primary" onChange={formik.handleChange} name="plus100" />
			</div>
			<div className="form__plus">
				<div className="form__plus-text">Additinal feature for 200$</div>
				<Switch color="primary" onChange={formik.handleChange} name="plus200" />
			</div>
			<textarea
				className="form__comment"
				name="comment"
				id="comment"
				type="text"
				placeholder="Type your comment"
				onChange={formik.handleChange}
				value={formik.values.comment}
			/>
			<div className="form__price">
				<div className="form__price-text">Total price:</div>
				<div className="form__price-count">${count ? count : 0}</div>
			</div>
			<Button
				style={{
					margin: '0 auto',
					marginTop: '20px',
					width: '150px',
				}}
				variant="contained"
				color="primary"
				type="submit"
			>
				Send form
			</Button>
		</form>
	);
};

export default Form;
