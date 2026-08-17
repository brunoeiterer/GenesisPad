import { RichTextEditor } from "@mantine/tiptap";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { useState } from "react";

export default function CardContent() {
  const [isEditing, setIsEditing] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Content...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        defaultAlignment: "left",
      }),
    ],
    onFocus() {
      setIsEditing(true);
    },
    onBlur() {
      setIsEditing(false);
    },
  });

  return (
    <RichTextEditor
      editor={editor}
      h="100%"
      styles={{
        Typography: { height: "100%" },
        content: { height: "100%" },
      }}
    >
      {isEditing && (
        <RichTextEditor.Toolbar
          p={0}
          m={0}
          style={{
            position: "absolute",
            top: "-40px",
            background: "transparent",
            border: "none",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>
      )}

      <RichTextEditor.Content bg={"transparent"} />
    </RichTextEditor>
  );
}
