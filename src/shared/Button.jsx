/** @format */

export default function Button({ btnLabel, version, type, isDisabled }) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{btnLabel}
		</button>
	);
}

Button.defaultProps = {
	version: "primary",
	type: "button",
	isDisabled: false,
};
