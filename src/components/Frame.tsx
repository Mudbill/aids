import { PropsWithChildren, useState } from "react";
import { useImageContext } from "../contexts/ImageContext";
import {
  BorderBottom,
  BorderLeft,
  BorderRight,
  BorderTop,
  CornerBottomLeft,
  CornerTopLeft,
  CornerBottomRight,
  CornerTopRight,
} from "./fragments/frame";

interface Props {
  x: number;
  y: number;
  width: number;
  height: number;
  style?: "generic" | "health" | "sanity";
}

function useImages(style: "generic" | "health" | "sanity") {
  const imageState = useImageContext();
  switch (style) {
    case "generic":
      return {
        borderT: imageState.imageBorderGenericTop,
        borderL: imageState.imageBorderGenericLeft,
        borderR: imageState.imageBorderGenericRight,
        borderB: imageState.imageBorderGenericBottom,
        cornerTL: imageState.imageCornerGenericTopLeft,
        cornerTR: imageState.imageCornerGenericTopRight,
        cornerBL: imageState.imageCornerGenericBottomLeft,
        cornerBR: imageState.imageCornerGenericBottomRight,
      };
    case "health":
      return {
        borderT: imageState.imageBorderHealthTop,
        borderL: imageState.imageBorderHealthLeft,
        borderR: imageState.imageBorderHealthRight,
        borderB: imageState.imageBorderHealthBottom,
        cornerTL: imageState.imageCornerHealthTopLeft,
        cornerTR: imageState.imageCornerHealthTopRight,
        cornerBL: imageState.imageCornerHealthBottomLeft,
        cornerBR: imageState.imageCornerHealthBottomRight,
      };
    case "sanity":
      return {
        borderT: imageState.imageBorderSanityTop,
        borderL: imageState.imageBorderSanityLeft,
        borderR: imageState.imageBorderSanityRight,
        borderB: imageState.imageBorderSanityBottom,
        cornerTL: imageState.imageCornerSanityTopLeft,
        cornerTR: imageState.imageCornerSanityTopRight,
        cornerBL: imageState.imageCornerSanityBottomLeft,
        cornerBR: imageState.imageCornerSanityBottomRight,
      };
  }
}

export default function GenericFrame(props: PropsWithChildren<Props>) {
  const images = useImages(props.style || "generic");
  // T border height depends on TL corner height
  // L border width depends on TL corner width
  const [topLeftSize, setTopLeftSize] = useState({
    width: 0,
    height: 0,
  });
  // R border width depends on TR corner width
  const [topRightSize, setTopRightSize] = useState({
    width: 0,
    height: 0,
  });
  // B border height depends on BL corner height
  const [bottomLeftSize, setBottomLeftSize] = useState({
    width: 0,
    height: 0,
  });

  const x = props.x - topLeftSize.width;
  const y = props.y - topLeftSize.height;

  return (
    <div>
      <CornerTopLeft
        src={images.cornerTL}
        x={x}
        y={y}
        onLoad={({ currentTarget }) =>
          setTopLeftSize({
            width: currentTarget.naturalWidth,
            height: currentTarget.naturalHeight,
          })
        }
      />
      <BorderTop
        src={images.borderT}
        x={props.x}
        y={y}
        height={topLeftSize.height}
        width={props.width}
      />
      <CornerTopRight
        src={images.cornerTR}
        x={props.x + props.width}
        y={y}
        onLoad={({ currentTarget }) =>
          setTopRightSize({
            width: currentTarget.naturalWidth,
            height: currentTarget.naturalHeight,
          })
        }
      />
      <BorderLeft
        src={images.borderL}
        x={x}
        y={props.y}
        width={topLeftSize.width}
        height={props.height}
      />
      {props.children}
      <BorderRight
        src={images.borderR}
        x={props.x + props.width}
        y={props.y}
        width={topRightSize.width}
        height={props.height}
      />
      <CornerBottomLeft
        src={images.cornerBL}
        x={x}
        y={props.y + props.height}
        width={topLeftSize.width}
        onLoad={({ currentTarget }) => {
          setBottomLeftSize({
            width: currentTarget.naturalWidth,
            height: currentTarget.naturalHeight,
          });
        }}
      />
      <BorderBottom
        src={images.borderB}
        x={props.x}
        y={props.y + props.height}
        width={props.width}
        height={bottomLeftSize.height}
      />
      <CornerBottomRight
        src={images.cornerBR}
        x={props.x + props.width}
        y={props.y + props.height}
      />
    </div>
  );
}
