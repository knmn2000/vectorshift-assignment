// toolbar.js

import {
  DELAY_NODE,
  INPUT_NODE,
  LLM_NODE,
  OUTPUT_NODE,
  TEXT_NODE,
  AB_TEST_NODE,
  EMAIL_NODE,
  CONDITIONAL_NODE,
  DOWNLOAD_NODE,
} from "./constants";
import { DraggableNode } from "./draggableNode";
import { SubmitButton } from "./submit";

export const PipelineToolbar = () => {
  return (
    <div className="toolbarContainer">
      <div
        style={{
          margin: "12px 0px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type={INPUT_NODE} label="Input" />
        <DraggableNode type={LLM_NODE} label="LLM" />
        <DraggableNode type={OUTPUT_NODE} label="Output" />
        <DraggableNode type={TEXT_NODE} label="Text" />
        <DraggableNode type={DELAY_NODE} label="Delay" />
        <DraggableNode type={AB_TEST_NODE} label="AB Testing" />
        <DraggableNode type={EMAIL_NODE} label="Email" />
        <DraggableNode type={CONDITIONAL_NODE} label="Condition" />
        <DraggableNode type={DOWNLOAD_NODE} label="Download" />
      </div>
      <SubmitButton />
    </div>
  );
};
