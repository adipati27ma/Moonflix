import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function TextInput({
  type = "text",
  name,
  value,
  defaultValue,
  className,
  variant = "primary",
  autoComplete,
  required,
  isFocused,
  onChange = null,
  placeholder,
  isError,
}) {
  const input = useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      <input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        className={`rounded-2xl py-[13px] px-7 w-full input-${variant} ${
          isError ? "input-error" : ""
        } ${className ? className : ""}`}
        ref={input}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => onChange !== null && onChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
}

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  isFocused: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
};
