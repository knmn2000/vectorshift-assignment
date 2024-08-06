// submit.js
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { submitGraph } from "./utils/api";
import { useState } from "react";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState("");

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  const handleSubmit = () => {
    submitGraph({ nodes, edges })
      .then((data) => {
        setToastData(data);
        handleShowToast();
        console.log(data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleSubmit}
      >
        <button className="submitButton" type="submit">
          Submit
        </button>
      </div>
      {showToast ? (
        <div className="toastContainer">
          <div className="toastHeader">
            {toastData.is_dag
              ? "Successfully submitted!"
              : "Invalid submission :("}
          </div>
          <div className="toastBody">
            <div>You used {toastData.num_nodes} nodes that are</div>
            <div>connected by {toastData.num_edges} connections!</div>
          </div>
        </div>
      ) : null}
    </>
  );
};
