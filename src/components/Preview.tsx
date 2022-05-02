import { useEditorContext } from "../contexts/EditorContext";
import IconAndFrame from "./elements/IconAndFrame";
import Oil from "./elements/Oil";
import TextBox from "./elements/TextBox";
import Slots from "./Slots";

export default function Preview() {
  const { active, dispatch, health, sanity, tinderbox, oil, journal, textbox } =
    useEditorContext();

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
        center={oil.center}
        size={oil.frameSize}
        hPadding={oil.frameHPadding}
        vPadding={oil.frameVPadding}
        offset={oil.frameOffset}
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
        center={sanity.center}
        size={sanity.frameSize}
        hPadding={sanity.frameHPadding}
        vPadding={sanity.frameVPadding}
        offset={sanity.frameOffset}
        wireframe={active === "sanity"}
        onClick={() => dispatch({ active: "sanity" })}
      />
      <IconAndFrame
        icon="imageTinderboxIcon"
        center={tinderbox.center}
        size={tinderbox.frameSize}
        hPadding={tinderbox.frameHPadding}
        vPadding={tinderbox.frameVPadding}
        offset={tinderbox.frameOffset}
        wireframe={active === "tinderbox"}
        onClick={() => dispatch({ active: "tinderbox" })}
      />
      <IconAndFrame
        icon="imageJournalIcon"
        center={journal.center}
        size={journal.frameSize}
        hPadding={journal.frameHPadding}
        vPadding={journal.frameVPadding}
        offset={journal.frameOffset}
        wireframe={active === "journal"}
        onClick={() => dispatch({ active: "journal" })}
      />
      <TextBox
        headerCenter={textbox.headerCenter}
        descCenter={textbox.center}
        descWidth={textbox.textWidth}
        hPadding={textbox.frameHPadding}
        vPadding={textbox.frameVPadding}
        offset={textbox.frameOffset}
        size={textbox.frameSize}
      />
    </div>
  );
}
