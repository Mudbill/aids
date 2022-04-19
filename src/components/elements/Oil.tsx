import { useState } from "react";
import { useEditorContext } from "../../contexts/EditorContext";
import { useImageContext } from "../../contexts/ImageContext";
import Frame from "../core/Frame";
import Icon from "../core/Icon";

interface Props {
  center: { x: number; y: number };
  size?: { x: number; y: number };
  offset?: { x: number; y: number };
  hPadding?: { left: number; right: number };
  vPadding?: { top: number; bottom: number };
}

export default function Oil(props: Props) {
  const center = props.center;
  const size = props.size || { x: -1, y: -1 };
  const offset = props.offset || { x: 0, y: 0 };
  const padding = {
    left: props.hPadding?.left || 0,
    right: props.hPadding?.right || 0,
    top: props.vPadding?.top || 0,
    bottom: props.vPadding?.bottom || 0,
  };

  const { active, dispatch } = useEditorContext();
  const { imageOilBgIcon, imageOilFgIcon } = useImageContext();

  const [imageData, setImageData] = useState({
    x: props.center.x,
    y: props.center.x,
    width: 0,
    height: 0,
  });

  const frameData = {
    x: imageData.x - padding.left,
    y: imageData.y - padding.top,
    width:
      (size.x === -1 ? imageData.width : size.x) + padding.left + padding.right,
    height:
      (size.y === -1 ? imageData.height : size.y) +
      padding.top +
      padding.bottom,
  };

  return (
    <>
      <Icon center={center} src={imageOilFgIcon} wireframe={active === "oil"} />
      <Icon
        center={center}
        src={imageOilBgIcon}
        getImageData={setImageData}
        wireframe={active === "oil"}
      />
      <Frame
        width={frameData.width}
        height={frameData.height}
        x={frameData.x}
        y={frameData.y}
        offset={offset}
        onClick={() => dispatch({ active: "oil" })}
        wireframe={active === "oil"}
      />
    </>
  );
}
