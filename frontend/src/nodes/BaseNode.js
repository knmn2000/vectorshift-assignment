import React from "react";
import { Handle } from "reactflow";
import styles from "./nodeStyles.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { shallow } from "zustand/shallow";
import { useStore } from "../store";

const defaultStyle = {
  width: "fit-content",
  maxWidth: 350,
  border: "1px solid black",
};

const containerStyles = {
  padding: "12px",
  border: "1px solid rgb(188, 125, 255)",
};

const selector = (state) => ({
  deleteNode: state.deleteNode,
});

export const BaseNode = ({
  title,
  style = defaultStyle,
  handles,
  children,
  emoji,
  id,
}) => {
  const { deleteNode } = useStore(selector, shallow);

  const handleDelete = () => {
    deleteNode(id);
  };

  return (
    <div style={{ ...style, ...containerStyles }} className={styles.baseNode}>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
          children={handle.children}
        />
      ))}
      <div className={styles.nodeHeader}>
        <div className={styles.nodeTitle}>
          <span className={styles.emoji}>{emoji}</span>
          <span>{title}</span>
        </div>
        <div>
          <button onClick={handleDelete}>
            <ClearIcon fontSize="small" />
          </button>
        </div>
      </div>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};
