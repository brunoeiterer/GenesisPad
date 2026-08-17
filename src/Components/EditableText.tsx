import { useState } from "react";
import { Text, TextInput } from "@mantine/core";

export interface EditableTextProps {
  placeholderText: string;
}

export function EditableText({ placeholderText }: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(placeholderText);

  const onBlur = () => {
    setIsEditing(false);
    if (value.trim() === "") {
      setValue(placeholderText);
    }
  };

  if (isEditing) {
    return (
      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        onBlur={onBlur}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onBlur();
          }
        }}
        autoFocus
        variant="unstyled"
        styles={{
          root: {
            display: "inline-block",
            verticalAlign: "middle",
          },
          wrapper: { margin: 0, padding: 0 },
          input: {
            fontSize: "inherit",
            fontWeight: "inherit",
            fontFamily: "inherit",
            lineHeight: "inherit",
            padding: 0,
            minHeight: "unset",
            height: "auto",
            textAlign: "inherit",
          },
        }}
      />
    );
  }

  return (
    <Text
      c={`${value === placeholderText ? "dimmed" : undefined}`}
      onClick={() => setIsEditing(true)}
      style={{
        cursor: "pointer",
        display: "inline-block",
        verticalAlign: "middle",
        width: "min-content",
        alignSelf: "center",
      }}
    >
      {value}
    </Text>
  );
}
