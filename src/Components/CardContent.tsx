import { RichTextEditor } from "@mantine/tiptap";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, useEditorState } from "@tiptap/react";
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

  const isEditing = useEditorState({
    editor,
    selector: (ctx) => ctx.editor.isFocused,
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
            flexWrap: "nowrap",
          }}
          onPointerDownCapture={(e) => e.preventDefault()}
        >
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Code />
            <RichTextEditor.ClearFormatting />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
            <RichTextEditor.H5 />
            <RichTextEditor.H6 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignRight />
            <RichTextEditor.AlignJustify />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>
      )}

      <RichTextEditor.Content bg={"transparent"} />
    </RichTextEditor>
  );
}
