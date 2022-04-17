import { PropsWithChildren, useState } from "react";
import { useFrameImages } from "../../contexts/ImageContext";

interface Props {
  style?: "generic" | "health" | "sanity";
}

export default function Frame(props: PropsWithChildren<Props>) {
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

  return (
    <div
      className="grid absolute"
      style={{
        gridTemplateRows: `${topLeftSize.height}px 1fr ${bottomLeftHeight}px`,
        gridTemplateColumns: `${topLeftSize.width}px 1fr ${topRightWidth}px`,
      }}
    >
      <img
        alt="top left corner"
        src={images.cornerTL}
        onLoad={({ currentTarget }) =>
          setTopLeftSize({
            width: currentTarget.naturalWidth,
            height: currentTarget.naturalHeight,
          })
        }
      />
      <img alt="top border" src={images.borderT} className="w-full h-full" />
      <img
        alt="top right corner"
        src={images.cornerTR}
        onLoad={(e) => setTopRightWidth(e.currentTarget.naturalWidth)}
      />
      <img alt="left border" src={images.borderL} className="w-full h-full" />
      <div className="inline">{props.children}</div>
      <img alt="right border" src={images.borderR} className="w-full h-full" />
      <img
        alt="bottom left corner"
        src={images.cornerBL}
        onLoad={(e) => setBottomLeftHeight(e.currentTarget.naturalHeight)}
      />
      <img alt="bottom border" src={images.borderB} className="w-full h-full" />
      <img alt="bottom right corner" src={images.cornerBR} />
    </div>
  );
}
