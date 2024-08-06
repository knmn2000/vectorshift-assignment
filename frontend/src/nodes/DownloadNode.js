// relative imports
import { BaseNode } from "./BaseNode";
import { getHandles } from "../utils/nodeUtils";
import { DOWNLOAD_NODE } from "../constants";

export const DownloadNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Download"
      emoji="📩"
      handles={getHandles({ id, nodeType: DOWNLOAD_NODE })}
      children={
        <label>Input received here will be downloaded as a file.</label>
      }
    />
  );
};
