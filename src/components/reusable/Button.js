import React, { useState } from "react";
import { Button as SemanticButton } from "semantic-ui-react";

const Button = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive((prevState) => !prevState);

  return (
    <SemanticButton toggle onClick={() => handleClick()} {...props}>
      {props.children}
    </SemanticButton>
  );
};

export default Button;
