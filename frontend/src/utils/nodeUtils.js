import { Position } from "reactflow";
import styles from "../nodes/nodeStyles.module.css";

//relative imports
import {
  INPUT_NODE,
  LLM_NODE,
  OUTPUT_NODE,
  TEXT_NODE,
  DELAY_NODE,
  AB_TEST_NODE,
  DOWNLOAD_NODE,
  CONDITIONAL_NODE,
  EMAIL_NODE,
} from "../constants";

export const getHandles = ({ id, nodeType }) => {
  switch (nodeType) {
    case INPUT_NODE:
      return [
        {
          type: "source",
          position: Position.Right,
          id: `${id}-value`,
        },
      ];
    case LLM_NODE:
      return [
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          style: { top: `${100 / 3}%` },
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-prompt`,
          style: { top: `${200 / 3}%` },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ];
    case OUTPUT_NODE:
      return [
        {
          type: "target",
          position: Position.Left,
          id: `${id}-value`,
        },
      ];
    case TEXT_NODE:
      return [
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ];
    case DELAY_NODE:
      return [
        {
          type: "target",
          position: Position.Left,
          id: `${id}-delay-input`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-delayed-output`,
        },
      ];
    case AB_TEST_NODE:
      return [
        {
          type: "target",
          position: Position.Left,
          id: `${id}-ab-input`,
        },
        {
          type: "source",
          position: Position.Right,
          style: { top: `${100 / 3}%` },
          id: `${id}-ab-output`,
        },
        {
          type: "source",
          position: Position.Right,
          style: { top: `${200 / 3}%` },
          id: `${id}-ab-output-2`,
        },
      ];
    case EMAIL_NODE:
      return [
        {
          type: "target",
          position: Position.Left,
          id: `${id}-email-input`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-email-output`,
        },
      ];
    case CONDITIONAL_NODE:
      return [
        {
          type: "target",
          position: Position.Left,
          id: `${id}-conditional-input`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-conditional-output-a`,
          style: { top: `${150 / 3}%` },
          children: <span className={styles.handleLabel}>Path A</span>,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-conditional-output-b`,
          style: { top: `${250 / 3}%` },
          children: <span className={styles.handleLabel}>Path B</span>,
        },
      ];
    case DOWNLOAD_NODE:
      return [
        {
          type: "target",
          position: Position.Left,
          id: `${id}-download-input`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-download-output`,
        },
      ];
    default:
      return [{}]
  }
};
