import { useEditorContext } from "../../contexts/EditorContext";
import Frame from "../core/Frame";
import Text from "../core/Text";

interface Props {
  headerCenter: { x: number; y: number };
  descCenter: { x: number; y: number };
  descWidth: number;
  size?: { x: number; y: number };
  offset?: { x: number; y: number };
  hPadding?: { left: number; right: number };
  vPadding?: { top: number; bottom: number };
}

export default function TextBox(props: Props) {
  const { headerCenter, descCenter, descWidth } = props;
  const size = props.size || { x: -1, y: -1 };
  const offset = props.offset || { x: 0, y: 0 };
  const padding = {
    left: props.hPadding?.left || 0,
    right: props.hPadding?.right || 0,
    top: props.vPadding?.top || 0,
    bottom: props.vPadding?.bottom || 0,
  };

  const { active, dispatch } = useEditorContext();

  const framePos = {
    x:
      (size.x === -1 ? descCenter.x - descWidth / 2 : size.x) +
      offset.x -
      padding.left,
    y: (size.y === -1 ? 0 : 0) + headerCenter.y + offset.y - padding.top,
  };

  return (
    <>
      <Text
        x={descCenter.x - descWidth / 2}
        y={descCenter.y}
        width={descWidth}
        fontSize={16}
        className="font-item-desc pt-8 leading-tight"
      >
        The lantern will light up dark places. When in game press F / Button X
        to turn it on.
      </Text>
      <Text
        x={400 - headerCenter.x}
        y={headerCenter.y}
        width={800}
        fontSize={18}
        className="font-item-header text-center font-bold"
      >
        Lantern (Off)
      </Text>
      <Frame
        x={framePos.x}
        y={framePos.y}
        width={props.descWidth}
        height={size.y === -1 ? 114 : size.y}
        onClick={() => dispatch({ active: "textbox" })}
        wireframe={active === "textbox"}
      />
    </>
  );
}
