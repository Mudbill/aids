import { ChangeEventHandler, useCallback } from "react";
import { useEditorContext } from "../../contexts/EditorContext";

interface Props {}

export default function EditView(props: Props) {
  const context = useEditorContext();
  const { setImage } = context;
  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (!e.currentTarget.files || !e.currentTarget.files.length) return;
      const file = e.currentTarget.files[0];
      setImage(file);
    },
    [setImage]
  );
  return (
    <div className="bg-slate-400 p-3">
      {/* X:{" "}
      <input
        className="border"
        type="number"
        value={context.x}
        onChange={(e) => context.setPos(Number(e.target.value), context.y)}
      />
      Y:{" "}
      <input
        className="border"
        type="number"
        value={context.y}
        onChange={(e) => context.setPos(context.x, Number(e.target.value))}
      /> */}
      Image: <input type="file" onChange={handleChangeFile} />
    </div>
  );
}
