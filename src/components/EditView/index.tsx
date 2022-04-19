import { useEditorContext } from "../../contexts/EditorContext";
import EditHealth from "./EditHealth";
import EditImage from "./EditImage";

interface Props {}

export default function EditView(props: Props) {
  const data = useEditorContext();
  return (
    <div className="bg-slate-400 p-3 flex flex-col gap-4">
      <div>Selected: {data.active}</div>
      <div>
        <EditImage />
      </div>
      <div>{data.active === "health" && <EditHealth />}</div>
    </div>
  );
}
