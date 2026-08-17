import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import { NodeProps, NodeResizer } from "@xyflow/react";
import { Card, Stack } from "@mantine/core";

export default function CardNode({ selected }: NodeProps) {
  return (
    <>
      <Card shadow="sm" withBorder w="100%" h="100%">
        <Stack w="100%" h="100%">
          <CardTitle />
          <CardContent />
        </Stack>
      </Card>
      {selected && (
        <NodeResizer
          lineStyle={{
            border: "none",
          }}
        />
      )}
    </>
  );
}
