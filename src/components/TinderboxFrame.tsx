import { useEffect, useMemo, useState } from "react";
import { GenericIcon } from "./fragments/icons";
import tinderbox from "../resources/textures/inventory_tinderboxes.png";
import GenericFrame from "./Frame";
import { useEditorContext } from "../contexts/EditorContext";

interface Props {
  center: { x: number; y: number };
  size: { x: number; y: number };
  offset: { x: number; y: number };
  hPadding: { left: number; right: number };
  vPadding: { top: number; bottom: number };
}

export default function TinderboxFrame({
  center,
  size,
  offset,
  vPadding,
  hPadding,
}: Props) {
  const { imageStream, activePart } = useEditorContext();

  useEffect(() => {
    if (activePart === "Tinderboxes") setIcon(imageStream);
  }, [imageStream]);

  const [icon, setIcon] = useState(tinderbox);
  const [iconSize, setIconSize] = useState({ x: 0, y: 0 });

  const iconPos = useMemo(() => {
    return {
      x: center.x - Math.floor(iconSize.x / 2),
      y: center.y - Math.floor(iconSize.y / 2),
    };
  }, [center, iconSize]);

  return (
    <>
      <GenericIcon
        src={icon}
        alt="Tinderboxes"
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
        style="generic"
        x={iconPos.x + offset.x - hPadding.left}
        y={iconPos.y + offset.y - vPadding.top}
        width={size.x + hPadding.left + hPadding.right}
        height={size.y + vPadding.top + vPadding.bottom}
      />
    </>
  );
}
