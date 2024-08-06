import { useState } from "react";

// relative imports
import { BaseNode } from "./BaseNode";
import { getHandles } from "../utils/nodeUtils";
import { CONDITIONAL_NODE } from "../constants";

import styles from "./nodeStyles.module.css";

export const ConditionalNode = ({ id }) => {
  const [path, setPath] = useState("");

  const handlePathChange = (e) => {
    setPath(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Condition"
      emoji="↕️"
      handles={getHandles({ id, nodeType: CONDITIONAL_NODE })}
      style={{ border: "1px solid black" }}
      children={
        <div style={{ width: "80%" }}>
          <label>
            Based on the input, automation will follow the path:
            <div className={styles.inputContainer}>
              <select value={path} onChange={handlePathChange}>
                <option value="A">Path A</option>
                <option value="B">Path B</option>
              </select>
            </div>
          </label>
        </div>
      }
    />
  );
};
