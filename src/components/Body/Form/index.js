import { useState } from "react";
import { Button, Input } from "reactstrap";

export default function Form({ addTodo }) {
  const [text, setText] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button
        color="primary"
        style={{ marginLeft: 8 }}
        onClick={() => {
          addTodo(text);
          setText("");
        }}>
        Add
      </Button>
    </div>
  );
}
