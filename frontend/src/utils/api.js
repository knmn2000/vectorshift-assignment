export const submitGraph = async ({ edges, nodes }) => {
  const formData = new FormData();
  const pipeline = { nodes, edges };
  formData.append("pipeline", JSON.stringify(pipeline));

  return await fetch("http://127.0.0.1:8000/pipelines/parse", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
