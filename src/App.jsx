import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Canvas from "./Components/Canvas";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Canvas />
    </MantineProvider>
  );
}
