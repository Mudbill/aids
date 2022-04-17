import { useMemo, useState } from "react";
import { GenericIcon } from "./fragments/icons";
import { useImageContext } from "../contexts/ImageContext";
import Frame from "./Frame";

interface Props {
  center: { x: number; y: number };
  size: { x: number; y: number };
  offset: { x: number; y: number };
  hPadding: { left: number; right: number };
  vPadding: { top: number; bottom: number };
}

export default function OilFrame({
  center,
  size,
  offset,
  vPadding,
  hPadding,
}: Props) {
  const { imageOilBgIcon, imageOilFgIcon } = useImageContext();

  const [bgIconSize, setBgIconSize] = useState({ x: 0, y: 0 });
  const [fgIconSize, setFgIconSize] = useState({ x: 0, y: 0 });

  const bgIconPos = useMemo(() => {
    return {
      x: center.x - Math.floor(bgIconSize.x / 2),
      y: center.y - Math.floor(bgIconSize.y / 2),
    };
  }, [center, bgIconSize]);

  const fgIconPos = useMemo(() => {
    return {
      x: center.x - Math.floor(fgIconSize.x / 2),
      y: center.y - Math.floor(fgIconSize.y / 2),
    };
  }, [center, bgIconSize]);

  return (
    <>
      <GenericIcon
        src={imageOilBgIcon}
        alt="Oil background"
        x={bgIconPos.x}
        y={bgIconPos.y}
        onLoad={({ currentTarget }) =>
          setBgIconSize({
            x: currentTarget.naturalWidth,
            y: currentTarget.naturalHeight,
          })
        }
      />
      <GenericIcon
        src={imageOilFgIcon}
        alt="Oil foreground"
        x={fgIconPos.x}
        y={fgIconPos.y}
        onLoad={({ currentTarget }) =>
          setFgIconSize({
            x: currentTarget.naturalWidth,
            y: currentTarget.naturalHeight,
          })
        }
      />
      <Frame
        x={bgIconPos.x + offset.x - hPadding.left}
        y={bgIconPos.y + offset.y - vPadding.top}
        width={size.x + hPadding.left + hPadding.right}
        height={size.y + vPadding.top + vPadding.bottom}
      />
    </>
  );
}
