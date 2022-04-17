import Text from "./fragments/text";
import Frame from "./Frame";

interface Props {
  headerCenter: { x: number; y: number };
  descCenter: { x: number; y: number };
  descWidth: number;
  size: { x: number; y: number };
  offset: { x: number; y: number };
  hPadding: { left: number; right: number };
  vPadding: { top: number; bottom: number };
}

export default function DescriptionBox(props: Props) {
  const framePos = {
    x:
      (props.size.x === -1
        ? props.descCenter.x - props.descWidth / 2
        : props.size.x) +
      props.offset.x -
      props.hPadding.left,
    y:
      (props.size.y === -1 ? 0 : 0) +
      props.headerCenter.y +
      props.offset.y -
      props.vPadding.top,
  };

  return (
    <>
      <Text
        x={400 - props.headerCenter.x}
        y={props.headerCenter.y}
        width={800}
        fontSize={18}
        className="font-item-header text-center font-bold"
      >
        Lantern (Off)
      </Text>
      <Text
        x={props.descCenter.x - props.descWidth / 2}
        y={props.descCenter.y}
        width={props.descWidth}
        fontSize={16}
        className="font-item-desc pt-8 leading-tight"
      >
        The lantern will light up dark places. When in game press F / Button X
        to turn it on
      </Text>
      <Frame
        x={framePos.x}
        y={framePos.y}
        width={props.descWidth}
        height={props.size.y === -1 ? 114 : props.size.y}
      />
    </>
  );
}
