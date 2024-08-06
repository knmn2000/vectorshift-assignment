// inputNode.js
import { useState } from "react";

// relative imports
import { BaseNode } from "./BaseNode";
import { getHandles } from "../utils/nodeUtils";
import { INPUT_NODE } from "../constants";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      emoji={"📓"}
      style={{ border: "1px solid black" }}
      handles={getHandles({ id, nodeType: INPUT_NODE })}
      children={
        <>
          <label>
            Name:
            <input type="text" value={currName} onChange={handleNameChange} />
          </label>
          <label>
            Type:
            <select value={inputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </>
      }
    />
  );
};
