import { SyntheticEvent } from "react";

interface Props {
  x?: number;
  y?: number;
  onLoad?: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
  alt?: string;
  src?: string;
}

export function GenericIcon(props: Props) {
  return (
    <img
      className="absolute"
      onLoad={props.onLoad}
      style={{ top: props.y, left: props.x }}
      alt={props.alt}
      src={props.src}
    />
  );
}
