// llmNode.js
import { Handle, Position } from "reactflow";

// relative imports
import { BaseNode } from "./BaseNode";
import { getHandles } from "../utils/nodeUtils";
import { LLM_NODE } from "../constants";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      handles={getHandles({ id, nodeType: LLM_NODE })}
      title={"LLM"}
      emoji={"🤖"}
      children={<span>This is a LLM.</span>}
    />
  );
};
