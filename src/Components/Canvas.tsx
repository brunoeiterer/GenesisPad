import { ReactFlow, Node, useNodesState, Controls } from "@xyflow/react";
import CardNode from "./CardNode";

const nodeTypes = {
  cardNode: CardNode,
};

const initialNodes: Node[] = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
    type: "cardNode",
    style: { width: 300, height: 300 },
  },
  {
    id: "n2",
    position: { x: 0, y: 100 },
    data: { label: "Node 2" },
    type: "cardNode",
    style: { width: 300, height: 300 },
  },
];

export default function Canvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}
