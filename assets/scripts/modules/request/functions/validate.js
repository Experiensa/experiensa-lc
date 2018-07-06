const validate = (values) => {
	let errors = {};
	if (!values.fullname) {
		errors.fullname = 'Required';
	}
	if (!values.phone) {
		errors.phone = 'Required';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	if (!values.destination) {
		errors.destination = 'Required';
	}
	return errors;
}

export default validate;
