import React from "react";

const FlashMessage = ({ className, message = "", name = "" }) => {
  return (
    <div
      className={`flex bg-green-100 rounded p-4 mb-4 text-sm text-green-700 ${className}`}
    >
      {message}
      {name !== "" && `: <b>${name}</b>`}
      {name}
    </div>
  );
};

export default FlashMessage;
