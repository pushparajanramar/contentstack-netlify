import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  type = "primary-black",
  label = "shop now",
  url,
  ...props
}) => {
  if (url) {
    return (
      <Link
        href={url ? url : "/"}
        className={[`cg-button ${type}`].join(" ")}
        {...props}
      >
        {label}
      </Link>
    );
  } else {
    // If url is not provided, render a non-link button
    return (
      <button className={`cg-button ${type}`} {...props}>
        {label}
      </button>
    );
  }
};

Button.propTypes = {
  /**
   * CG Button variants
   */
  type: PropTypes.oneOf([
    "primary-black",
    "primary-white",
    "primary-outlined",
    "secondary-black",
    "secondary-white",
    "cta-black",
    "cta-white",
    "text-link",
  ]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
};

// Button.defaultProps = {
//   label: "shop now",
//   type: "primary-black",
//   url: "/",
// };
