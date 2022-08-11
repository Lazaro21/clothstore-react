import {
	FormInputContainer,
	FormInputLabel,
	Group,
} from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group>
			<FormInputContainer className="form-input" {...otherProps} />
			{label && (
				<FormInputLabel shrink={otherProps.value.lenght}>
					{label}
				</FormInputLabel>
			)}
			{/* {console.log(otherProps)} */}
		</Group>
	);
};

export default FormInput;
