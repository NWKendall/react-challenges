import React, { useState } from "react";
import "./button.styles.css";

// Build two elements: elementA and elementB -- When elementA is clicked, the text in elementA is bold and the text in elementB is normal -- What elementB is clicked, the text in elementB is bold and the text in elementA is normal

const Button = () => {
  const [bold, setBold] = useState({
    elementA: true,
    elementB: false,
  });

  const toggle = () => {
    setBold({ elementA: !bold.elementA, elementB: !bold.elementB });
  };

  return (
    <div className="buttonContainer">
      Only one element can be bold at a time:
      <div
        className={`elHover + ${bold.elementA ? "toggleBold" : ""}`}
        onClick={() => toggle()}
      >
        Element A
      </div>
      <div
        className={`elHover + ${bold.elementB ? "toggleBold" : ""}`}
        onClick={() => toggle()}
      >
        Element B
      </div>
    </div>
  );
};

export default Button;
