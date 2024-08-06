import { useState } from "react";

// relative imports
import { BaseNode } from "./BaseNode";
import { getHandles } from "../utils/nodeUtils";
import { EMAIL_NODE } from "../constants";

export const EmailNode = ({ id, data }) => {
  const [email, setEmail] = useState(data.email || "");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Email"
      emoji="📬"
      handles={getHandles({ id, nodeType: EMAIL_NODE })}
      children={
        <label>
          Email Address:
          <input
            type="text"
            value={email}
            placeholder="example@mail.com"
            onChange={(e) => handleEmailInput(e)}
          />
        </label>
      }
    />
  );
};
