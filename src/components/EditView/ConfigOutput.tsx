import { useMemo } from "react";
import { useEditorContext } from "../../contexts/EditorContext";

interface Props {}

export default function ConfigOutput(props: Props) {
  const { health, journal, oil, sanity, tinderbox } = useEditorContext();

  const output = useMemo(() => {
    let output = "";

    output += `HealthCenter = "${health.center.x} ${health.center.y} 1"\n`;
    output += `HealthFrameSize = "${health.frameSize.x} ${health.frameSize.y}"\n`;
    output += `HealthFrameHPadding = "${health.frameHPadding.left} ${health.frameHPadding.right}"\n`;
    output += `HealthFrameVPadding = "${health.frameVPadding.top} ${health.frameVPadding.bottom} 1"\n`;
    output += `HealthFrameOffset = "${health.frameOffset.x} ${health.frameOffset.y} 0"\n`;
    output += "\n";
    output += `SanityCenter = "${sanity.center.x} ${sanity.center.y} 1"\n`;
    output += `SanityFrameSize = "${sanity.frameSize.x} ${sanity.frameSize.y}"\n`;
    output += `SanityFrameHPadding = "${sanity.frameHPadding.left} ${sanity.frameHPadding.right}"\n`;
    output += `SanityFrameVPadding = "${sanity.frameVPadding.top} ${sanity.frameVPadding.bottom} 1"\n`;
    output += `SanityFrameOffset = "${sanity.frameOffset.x} ${sanity.frameOffset.y} 0"\n`;
    output += "\n";
    output += `TinderboxesCenter = "${tinderbox.center.x} ${tinderbox.center.y} 1"\n`;
    output += `TinderboxesFrameSize = "${tinderbox.frameSize.x} ${tinderbox.frameSize.y}"\n`;
    output += `TinderboxesFrameHPadding = "${tinderbox.frameHPadding.left} ${tinderbox.frameHPadding.right}"\n`;
    output += `TinderboxesFrameVPadding = "${tinderbox.frameVPadding.top} ${tinderbox.frameVPadding.bottom} 1"\n`;
    output += `TinderboxesFrameOffset = "${tinderbox.frameOffset.x} ${tinderbox.frameOffset.y} 0"\n`;
    output += "\n";
    output += `OilCenter = "${oil.center.x} ${oil.center.y} 1"\n`;
    output += `OilFrameSize = "${oil.frameSize.x} ${oil.frameSize.y}"\n`;
    output += `OilFrameHPadding = "${oil.frameHPadding.left} ${oil.frameHPadding.right}"\n`;
    output += `OilFrameVPadding = "${oil.frameVPadding.top} ${oil.frameVPadding.bottom} 1"\n`;
    output += `OilFrameOffset = "${oil.frameOffset.x} ${oil.frameOffset.y} 0"\n`;
    output += "\n";
    output += `JournalCenter = "${journal.center.x} ${journal.center.y} 1"\n`;
    output += `JournalFrameSize = "${journal.frameSize.x} ${journal.frameSize.y}"\n`;
    output += `JournalFrameHPadding = "${journal.frameHPadding.left} ${journal.frameHPadding.right}"\n`;
    output += `JournalFrameVPadding = "${journal.frameVPadding.top} ${journal.frameVPadding.bottom} 1"\n`;
    output += `JournalFrameOffset = "${journal.frameOffset.x} ${journal.frameOffset.y} 0"\n`;

    return output;
  }, [health, journal, oil, tinderbox, journal]);

  return (
    <div className="">
      <span>menu.cfg</span>
      <pre className="bg-white border border-slate-500 overflow-auto max-h-80">
        {output}
      </pre>
    </div>
  );
}
