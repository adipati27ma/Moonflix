export default function InputLabel({
    value,
    className = "",
    children,
    forInput,
    ...props
}) {
    return (
        <label
            {...props}
            className={`text-base block mb-2 ` + className}
            htmlFor={forInput}
        >
            {value ? value : children}
        </label>
    );
}
