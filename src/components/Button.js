import React from "react";

export default (props) => {
  const { variant } = props;
  if (variant === "link")
    return (
      <Link {...props} onClick={props.onClick}>
        {props.children}
      </Link>
    );
};

function Link(props) {
  return (
    <a href="#" {...props} className="link">
      {props.children}
      <style jsx>{`
        .link {
          background: transparent;
          border: none;
          color: white;
          padding: 4px;
          font-size: 14px;
          text-decoration: none;
          display: inline-block;
        }
        .link:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </a>
  );
}
