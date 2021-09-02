const validate = values => {
	const errors = {};
	if (!values.firstName) {
		errors.firstName = '*  required field';
	} else if (values.firstName.length < 2) {
		errors.firstName = '* min length - 2 symbols';
	}

	if (!values.lastName) {
		errors.lastName = '* required field';
	} else if (values.lastName.length < 2) {
		errors.lastName = '* min length - 2 symbols';
	}

	if (!values.email || values.email.length < 1) {
		errors.email = '* required field';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = '* invalid format';
	}

	if (!values.product) {
		errors.product = '* required field';
	}

	return errors;
};

export default validate;
