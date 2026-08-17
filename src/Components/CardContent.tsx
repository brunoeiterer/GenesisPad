import { RichTextEditor } from "@mantine/tiptap";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";

export default function CardContent() {
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
  });

  return (
    <div style={{ height: "100%" }}>
      <RichTextEditor
        editor={editor}
        style={{
          height: "100%",
        }}
        styles={{
          content: {
            height: "100%",
          },
        }}
      >
        <RichTextEditor.Content style={{ height: "100%" }} />
      </RichTextEditor>
    </div>
  );
}
