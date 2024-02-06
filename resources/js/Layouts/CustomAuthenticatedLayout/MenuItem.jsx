import React from "react";
import { Link } from "@inertiajs/react";

const MenuItem = ({ link, icon, text, isActive, method = "get" }) => {
  return (
    <Link
      href={link ? route(link) : null}
      className={`side-link ${isActive && "active"}`}
      method={method}
      as="button"
    >
      {icon}
      {text}
    </Link>
  );
};

export default MenuItem;
