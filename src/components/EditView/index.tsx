import { ActiveElement, useEditorContext } from "../../contexts/EditorContext";
import ConfigOutput from "./ConfigOutput";
import EditImage from "./EditImage";
import EditBasic from "./EditBasic";
import EditSlots from "./EditSlots";
import EditTextBox from "./EditTextBox";

interface Props {}

export default function EditView(props: Props) {
  const data = useEditorContext();
  return (
    <div className="bg-slate-400 p-3 flex flex-col gap-4 h-full">
      <div>
        <select
          value={data.active || ""}
          onChange={(e) =>
            data.dispatch({ active: e.target.value as ActiveElement })
          }
        >
          <option>-</option>
          <option value="health">Health</option>
          <option value="sanity">Sanity</option>
          <option value="tinderbox">Tinderbox</option>
          <option value="journal">Journal</option>
          <option value="oil">Oil</option>
          <option value="slots">Slots</option>
          <option value="textbox">Text box</option>
        </select>
      </div>
      <div>
        <EditImage />
      </div>
      {data.active === "health" && (
        <div>
          <EditBasic type="health" label="Sanity settings" />
        </div>
      )}
      {data.active === "sanity" && (
        <div>
          <EditBasic type="sanity" label="Sanity settings" />
        </div>
      )}
      {data.active === "tinderbox" && (
        <div>
          <EditBasic type="tinderbox" label="Tinderbox settings" />
        </div>
      )}
      {data.active === "oil" && (
        <div>
          <EditBasic type="oil" label="Oil settings" />
        </div>
      )}
      {data.active === "journal" && (
        <div>
          <EditBasic type="journal" label="Journal settings" />
        </div>
      )}
      {data.active === "slots" && (
        <div>
          <EditSlots />
        </div>
      )}
      {data.active === "textbox" && (
        <div>
          <EditTextBox />
        </div>
      )}
      <div className="mt-auto">
        <ConfigOutput />
      </div>
    </div>
  );
}
