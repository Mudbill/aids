import { useEffect, useMemo, useState } from "react";
import { GenericIcon } from "./fragments/icons";
import health from "../resources/textures/inventory_health_100.png";
import GenericFrame from "./Frame";
import { useEditorContext } from "../contexts/EditorContext";

interface Props {
  center: { x: number; y: number };
  size: { x: number; y: number };
  offset: { x: number; y: number };
  hPadding: { left: number; right: number };
  vPadding: { top: number; bottom: number };
}

export default function HealthFrame(props: Props) {
  const { imageStream, activePart } = useEditorContext();

  useEffect(() => {
    if (activePart === "Health") setIcon(imageStream);
  }, [imageStream]);

  const [icon, setIcon] = useState(health);
  const [iconSize, setIconSize] = useState({ x: 0, y: 0 });

  const iconPos = useMemo(() => {
    return {
      x: props.center.x - Math.floor(iconSize.x / 2),
      y: props.center.y - Math.floor(iconSize.y / 2),
    };
  }, [props.center, iconSize]);

  const frameSize = {
    width:
      props.size.x === -1
        ? iconSize.x
        : props.size.x + props.hPadding.left + props.hPadding.right,
    height:
      props.size.y === -1
        ? iconSize.y
        : props.size.y + props.vPadding.top + props.vPadding.bottom,
  };

  return (
    <>
      <GenericIcon
        src={icon}
        alt="Health"
        x={iconPos.x}
        y={iconPos.y}
        onLoad={({ currentTarget }) =>
          setIconSize({
            x: currentTarget.clientWidth,
            y: currentTarget.clientHeight,
          })
        }
      />
      <GenericFrame
        x={iconPos.x + props.offset.x - props.hPadding.left}
        y={iconPos.y + props.offset.y - props.vPadding.top}
        width={frameSize.width}
        height={frameSize.height}
        style="health"
      />
    </>
  );
}
