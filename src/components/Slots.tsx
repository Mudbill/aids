import Frame from "./Frame";
import Slot from "./Slot";

interface Props {
  rows?: number;
  columns?: number;
  x: number;
  y: number;
  slotSize: { width: number; height: number };
  slotSeparation: { x: number; y: number };
  slotGridColor: { r: number; g: number; b: number; a: number };
  frameSize: { x: number; y: number };
  frameHPadding: { left: number; right: number };
  frameVPadding: { top: number; bottom: number };
  frameOffset: { x: number; y: number };
}

export default function Slots(props: Props) {
  const { rows = 3, columns = 6 } = props;

  const x = props.x + props.frameOffset.x;
  const y = props.y + props.frameOffset.y;

  const frameSize = {
    width:
      (props.slotSize.width +
        props.slotSeparation.x +
        props.frameHPadding.left +
        props.frameHPadding.right) *
        columns -
      props.slotSeparation.x,
    height:
      (props.slotSize.height +
        props.slotSeparation.y +
        props.frameVPadding.top +
        props.frameVPadding.bottom) *
        rows -
      props.slotSeparation.y,
  };

  return (
    <>
      <div
        className="absolute"
        style={{
          top: y,
          left: x,
        }}
      >
        <div
          className="grid"
          style={{
            backgroundColor: `rgba(${props.slotGridColor.r * 255},${
              props.slotGridColor.g * 255
            },${props.slotGridColor.b * 255},${props.slotGridColor.a * 255})`,
            rowGap: props.slotSeparation.y,
            columnGap: props.slotSeparation.x,
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {new Array(rows * columns)
            .fill({
              width: props.slotSize.width,
              height: props.slotSize.height,
            })
            .map((slot, i) => (
              <div key={i}>
                <Slot width={slot.width} height={slot.height} />
              </div>
            ))}
        </div>
      </div>
      <Frame
        x={x}
        y={y}
        width={props.frameSize.x === -1 ? frameSize.width : props.frameSize.x}
        height={props.frameSize.y === -1 ? frameSize.height : props.frameSize.y}
      ></Frame>
    </>
  );
}
