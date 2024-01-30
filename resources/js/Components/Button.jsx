import PropTypes from "prop-types";

export default function Button({
    type,
    className = "",
    disabled,
    children,
    variant = "primary",
    isLoading = false,
    ...props
}) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${
                isLoading && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    children: PropTypes.node,
};
