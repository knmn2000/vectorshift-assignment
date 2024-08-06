import { useState } from "react";

// relative imports
import { BaseNode } from "./BaseNode";
import { getHandles } from "../utils/nodeUtils";
import { DELAY_NODE } from "../constants";

import styles from "./nodeStyles.module.css";

export const DelayNode = ({ id, data }) => {
  const [delay, setDelay] = useState({ hours: null, days: null });

  const handleDelayChange = ({ e, type }) => {
    // check if e.target.value is a positive integer
    // had to put this workaround because i didnt have time to debug why type='number' was buggy
    if (/^\d+$/.test(e.target.value) || e.target.value === "") {
      setDelay((delay) => {
        return { ...delay, [type]: e.target.value };
      });
    }
  };

  return (
    <BaseNode
      title="Delay"
      emoji="⌛"
      handles={getHandles({ id, nodeType: DELAY_NODE })}
      style={{ border: "1px solid black" }}
      id={id}
      children={
        <label>
          Time:
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={delay["days"]}
              placeholder="Days"
              onChange={(e) => handleDelayChange({ e, type: "days" })}
            />
            <input
              type="text"
              value={delay["hours"]}
              placeholder="Hours"
              onChange={(e) => handleDelayChange({ e, type: "hours" })}
            />
          </div>
        </label>
      }
    />
  );
};
