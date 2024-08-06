import { useState } from "react";

// relative imports
import { BaseNode } from "./BaseNode";
import { getHandles } from "../utils/nodeUtils";
import { AB_TEST_NODE } from "../constants";

import styles from "./nodeStyles.module.css";

export const ABTestNode = ({ id }) => {
  const [region, setRegion] = useState('USA');

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="A/B Testing"
      emoji="🧪"
      handles={getHandles({ id, nodeType: AB_TEST_NODE})}
      children={
        <label>
          Select the region of users where the A/B test will be conducted:
          <div className={styles.inputContainer}>
            <select value={region} onChange={handleRegionChange}>
              <option value="USA">USA</option>
              <option value="EU">EU</option>
              <option value="Asia">Asia</option>
            </select>
          </div>
        </label>
      }
    />
  );
};
