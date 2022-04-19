import { useEditorContext } from "../contexts/EditorContext";
import IconAndFrame from "./elements/IconAndFrame";
import Oil from "./elements/Oil";
import TextBox from "./elements/TextBox";
import Slots from "./Slots";

export default function Preview() {
  const { active, dispatch, health } = useEditorContext();

  return (
    <div
      className="inventory border-4 border-slate-600 relative bg-mono w-[800px] h-[600px] overflow-hidden cursor-custom"
      onClick={(e) =>
        e.target === e.currentTarget && dispatch({ active: undefined })
      }
    >
      <Slots
        x={172}
        y={62}
        slotSize={{ width: 74, height: 99 }}
        slotSeparation={{ x: 2, y: 2 }}
        slotGridColor={{ r: 0.4, g: 0.4, b: 0.4, a: 0.25 }}
        frameSize={{ x: -1, y: -1 }}
        frameHPadding={{ left: 0, right: 0 }}
        frameVPadding={{ top: 0, bottom: 0 }}
        frameOffset={{ x: 0, y: 0 }}
      />
      <Oil
        center={{ x: 720, y: 293 }}
        size={{ x: 100, y: 100 }}
        hPadding={{ left: 0, right: 0 }}
        vPadding={{ top: 10, bottom: 15 }}
        offset={{ x: -32, y: -5 }}
      />
      <IconAndFrame
        icon="imageHealthIcon"
        frameStyle="health"
        center={health.center}
        size={health.frameSize}
        hPadding={health.frameHPadding}
        vPadding={health.frameVPadding}
        offset={health.frameOffset}
        wireframe={active === "health"}
        onClick={() => dispatch({ active: "health" })}
      />
      <IconAndFrame
        icon="imageSanityIcon"
        frameStyle="sanity"
        center={{ x: 75, y: 418 }}
        size={{ x: 100, y: -1 }}
        hPadding={{ left: 0, right: 0 }}
        vPadding={{ top: 0, bottom: 0 }}
        offset={{ x: 7, y: 0 }}
        wireframe={active === "sanity"}
        onClick={() => dispatch({ active: "sanity" })}
      />
      <IconAndFrame
        icon="imageTinderboxIcon"
        center={{ x: 720, y: 127 }}
        size={{ x: 100, y: 90 }}
        hPadding={{ left: 0, right: 0 }}
        vPadding={{ top: 0, bottom: 0 }}
        offset={{ x: -28, y: -15 }}
        wireframe={active === "tinderbox"}
        onClick={() => dispatch({ active: "tinderbox" })}
      />
      <IconAndFrame
        icon="imageJournalIcon"
        center={{ x: 720, y: 472 }}
        size={{ x: 100, y: -1 }}
        hPadding={{ left: 0, right: 0 }}
        vPadding={{ top: 0, bottom: 0 }}
        offset={{ x: -5, y: 0 }}
        wireframe={active === "journal"}
        onClick={() => dispatch({ active: "journal" })}
      />
      <TextBox
        headerCenter={{ x: 400, y: 420 }}
        descCenter={{ x: 400, y: 420 }}
        descWidth={456}
      />
    </div>
  );
}
