import React from "react";

const TopBar = (props) => {
  return (
    <div className="navbar">
      <img
        src={
          props.img ||
          "data:image/png;base64,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"
        }
        alt="mSeva Logo"
      />
    </div>
  );
};

export default TopBar;
