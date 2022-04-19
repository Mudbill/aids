import classNames from "classnames";
import { PropsWithChildren, useState } from "react";
import { useFrameImages } from "../../contexts/ImageContext";

interface Props {
  x: number;
  y: number;
  width: number;
  height: number;
  padding?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  offset?: {
    x: number;
    y: number;
  };
  style?: "generic" | "health" | "sanity";
  onClick?: () => void;
  wireframe?: boolean;
}

export default function Frame(props: PropsWithChildren<Props>) {
  const offset = props.offset || { x: 0, y: 0 };
  const images = useFrameImages(props.style || "generic");

  // T border height depends on TL corner height
  // L border width depends on TL corner width
  const [topLeftSize, setTopLeftSize] = useState({
    width: 0,
    height: 0,
  });

  // R border width depends on TR corner width
  const [topRightWidth, setTopRightWidth] = useState(0);

  // B border height depends on BL corner height
  const [bottomLeftHeight, setBottomLeftHeight] = useState(0);

  const x = props.x - topLeftSize.width + offset.x;
  const y = props.y - topLeftSize.height + offset.y;

  const wireframeClasses = classNames(
    props.wireframe &&
      "outline outline-1 outline-orange-500 outline-offset-[-1px]"
  );

  return (
    <div
      className="grid absolute"
      style={{
        left: x,
        top: y,
        gridTemplateRows: `${topLeftSize.height}px ${props.height}px ${bottomLeftHeight}px`,
        gridTemplateColumns: `${topLeftSize.width}px ${props.width}px ${topRightWidth}px`,
      }}
      onClick={props.onClick}
    >
      <img
        alt="top left corner"
        src={images.cornerTL}
        className={wireframeClasses}
        draggable={false}
        onLoad={({ currentTarget }) =>
          setTopLeftSize({
            width: currentTarget.naturalWidth,
            height: currentTarget.naturalHeight,
          })
        }
      />
      <img
        alt="top border"
        src={images.borderT}
        className="h-full"
        style={{ width: props.width }}
        draggable={false}
      />
      <img
        alt="top right corner"
        src={images.cornerTR}
        className={wireframeClasses}
        onLoad={(e) => setTopRightWidth(e.currentTarget.naturalWidth)}
        draggable={false}
      />
      <img
        alt="left border"
        src={images.borderL}
        className="w-full"
        style={{ height: props.height }}
        draggable={false}
      />
      <div>{props.children}</div>
      <img
        alt="right border"
        src={images.borderR}
        className="w-full"
        style={{ height: props.height }}
        draggable={false}
      />
      <img
        alt="bottom left corner"
        src={images.cornerBL}
        className={wireframeClasses}
        draggable={false}
        onLoad={(e) => setBottomLeftHeight(e.currentTarget.naturalHeight)}
      />
      <img
        alt="bottom border"
        src={images.borderB}
        className="h-full"
        style={{ width: props.width }}
        draggable={false}
      />
      <img
        alt="bottom right corner"
        src={images.cornerBR}
        className={wireframeClasses}
        draggable={false}
      />
    </div>
  );
}
