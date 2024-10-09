import "./button.css";

function Button(props) {
	const { onClick, text, type } = props;

	const typeClassMap = {
		success: "button button-success",
		warning: "button button-warning",
		danger: "button button-danger"
	};

	const buttonClass = typeClassMap[type] || "button";

	return (
		<button onClick={onClick} className={buttonClass}>
			{text}
		</button>
	);
}

export default Button;
