// textNode.js

import { useState } from "react";
import { getHandles } from "../utils/nodeUtils";
import { TEXT_NODE } from "../constants";
import { BaseNode } from "./BaseNode";
import { Position, useUpdateNodeInternals } from "reactflow";
import styles from "../nodes/nodeStyles.module.css";

// reference https://stackoverflow.com/questions/413071/regex-to-get-string-between-curly-braces
const getInputs = (text) => {
  const regex = /{{(.*?)}}/g;
  const inputs = [];
  let match;
  while ((match = regex.exec(text))) {
    if (match !== null) {
      inputs.push(match[1]);
    }
  }
  return inputs;
};

const generateHandles = ({ handleInputs, id }) => {
  const handles = [];
  handleInputs.forEach((input, index) => {
    handles.push({
      type: "target",
      position: Position.Left,
      id: `${id}-${input}-${index}`,
      style: { top: `${((index + 1) / (handleInputs.length + 1)) * 100}%` },
      children: (
        <span
          className={styles.dynamicHandleLabel}
          id={`${id}-${input}-${index}-span`}
        >
          {input}
        </span>
      ),
    });
  });
  return handles;
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState(
    generateHandles({ id, handleInputs: getInputs(currText) }),
  );
  const updateNodeInternals = useUpdateNodeInternals();
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    setHandles(
      generateHandles({ id, handleInputs: getInputs(e.target.value) }),
    );
    updateNodeInternals(id);
  };

  // if handles > 4, increase height by 20px for each additional handle
  const heightAdjustedStyle =
    handles.length > 4 ? { height: `${150 + handles.length * 20}px` } : {};

  return (
    <BaseNode
      id={id}
      title="Text"
      emoji="📝"
      handles={[...getHandles({ id, nodeType: TEXT_NODE }), ...handles]}
      style={heightAdjustedStyle}
      children={
        <label>
          <textarea col={3} style={{resize: 'vertical'}}type="text" value={currText} onChange={handleTextChange} />
        </label>
      }
    />
  );
};
