import { useState } from "react";
import { ImageState, useImageContext } from "../../contexts/ImageContext";
import Frame from "../core/Frame";
import Icon from "../core/Icon";

interface Props {
  center: { x: number; y: number };
  size?: { x: number; y: number };
  offset?: { x: number; y: number };
  hPadding?: { left: number; right: number };
  vPadding?: { top: number; bottom: number };
  frameStyle?: "generic" | "health" | "sanity";
  icon: keyof ImageState;
  onClick?: () => void;
  wireframe?: boolean;
}

export default function IconAndFrame(props: Props) {
  const center = props.center;
  const size = props.size || { x: -1, y: -1 };
  const offset = props.offset || { x: 0, y: 0 };
  const padding = {
    left: props.hPadding?.left || 0,
    right: props.hPadding?.right || 0,
    top: props.vPadding?.top || 0,
    bottom: props.vPadding?.bottom || 0,
  };

  const { [props.icon]: image } = useImageContext();

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
      <Icon
        center={center}
        src={image}
        getImageData={setImageData}
        wireframe={props.wireframe}
      />
      <Frame
        width={frameData.width}
        height={frameData.height}
        x={frameData.x}
        y={frameData.y}
        offset={offset}
        style={props.frameStyle}
        onClick={props.onClick}
        wireframe={props.wireframe}
      />
    </>
  );
}
