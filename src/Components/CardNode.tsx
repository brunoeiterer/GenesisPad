import CardContent from "./CardContent";
import { NodeProps, NodeResizer } from "@xyflow/react";

export default function CardNode({ selected }: NodeProps) {
  return (
    <div style={{ height: "100%" }}>
      <CardContent />
      {selected && (
        <NodeResizer
          lineStyle={{
            border: "none",
          }}
        />
      )}
    </div>
  );
}
