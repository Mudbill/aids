import DescriptionBox from "./components/DescriptionBox";
import EditView from "./components/EditView";
import HealthFrame from "./components/HealthFrame";
import JournalFrame from "./components/JournalFrame";
import OilFrame from "./components/OilFrame";
import Preview from "./components/Preview";
import SanityFrame from "./components/SanityFrame";
import Slots from "./components/Slots";
import TinderboxFrame from "./components/TinderboxFrame";
import { EditorProvider } from "./contexts/EditorContext";
import { ImageContextProvider } from "./contexts/ImageContext";

export default function App() {
  return (
    <ImageContextProvider>
      <EditorProvider>
        <Preview>
          <HealthFrame
            center={{ x: 75, y: 168 }}
            size={{ x: 110, y: -1 }}
            hPadding={{ left: 0, right: 0 }}
            vPadding={{ top: 0, bottom: 0 }}
            offset={{ x: 18, y: 0 }}
          />
          <SanityFrame
            center={{ x: 75, y: 418 }}
            size={{ x: 100, y: -1 }}
            hPadding={{ left: 0, right: 0 }}
            vPadding={{ top: 0, bottom: 0 }}
            offset={{ x: 7, y: 0 }}
          />
          <TinderboxFrame
            center={{ x: 720, y: 127 }}
            size={{ x: 100, y: 90 }}
            hPadding={{ left: 0, right: 0 }}
            vPadding={{ top: 0, bottom: 0 }}
            offset={{ x: -28, y: -15 }}
          />
          <OilFrame
            center={{ x: 720, y: 293 }}
            size={{ x: 100, y: 100 }}
            hPadding={{ left: 0, right: 0 }}
            vPadding={{ top: 10, bottom: 15 }}
            offset={{ x: -32, y: -5 }}
          />
          <JournalFrame
            center={{ x: 720, y: 472 }}
            size={{ x: 100, y: 98 }}
            hPadding={{ left: 0, right: 0 }}
            vPadding={{ top: 0, bottom: 0 }}
            offset={{ x: -5, y: 0 }}
          />
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
          <DescriptionBox
            headerCenter={{ x: 400, y: 420 }}
            descCenter={{ x: 400, y: 420 }}
            descWidth={456}
            size={{ x: -1, y: -1 }}
            hPadding={{ left: 0, right: 0 }}
            vPadding={{ top: 0, bottom: 0 }}
            offset={{ x: 0, y: 0 }}
          />
        </Preview>
        <EditView />
      </EditorProvider>
    </ImageContextProvider>
  );
}
