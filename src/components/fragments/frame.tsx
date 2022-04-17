import { SyntheticEvent } from "react";

type PosProps = {
  x?: number;
  y?: number;
};

type SizeProps = {
  width?: number;
  height?: number;
};

type CommonProps = {
  onLoad?: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
  src: string;
};

export function BorderBottom({
  x = 0,
  y = 0,
  width = 64,
  height = 21,
  src,
}: PosProps & SizeProps & CommonProps) {
  return (
    <img
      src={src}
      style={{ top: y, left: x, width, height }}
      alt="border bottom"
      className="absolute"
    />
  );
}

export function BorderLeft({
  x = 0,
  y = 0,
  width = 21,
  height = 120,
  src,
}: PosProps & SizeProps & CommonProps) {
  return (
    <img
      src={src}
      style={{ top: y, left: x, width, height }}
      alt="border left"
      className="absolute"
    />
  );
}

export function BorderRight({
  x = 0,
  y = 0,
  width = 21,
  height = 120,
  src,
}: PosProps & SizeProps & CommonProps) {
  return (
    <img
      src={src}
      style={{ top: y, left: x, width, height }}
      alt="border right"
      className="absolute"
    />
  );
}

export function BorderTop({
  x = 0,
  y = 0,
  width = 64,
  height = 21,
  src,
}: PosProps & SizeProps & CommonProps) {
  return (
    <img
      src={src}
      style={{ top: y, left: x, width, height }}
      alt="border top"
      className="absolute"
    />
  );
}

export function CornerTopLeft({
  x = 0,
  y = 0,
  onLoad,
  src,
}: PosProps & CommonProps) {
  return (
    <img
      src={src}
      style={{ top: y, left: x }}
      alt="border top"
      className="absolute"
      onLoad={onLoad}
    />
  );
}

export function CornerTopRight({
  x = 0,
  y = 0,
  onLoad,
  src,
}: PosProps & CommonProps) {
  return (
    <img
      src={src}
      style={{ top: y, left: x }}
      alt="border top"
      className="absolute"
      onLoad={onLoad}
    />
  );
}

export function CornerBottomLeft({
  x = 0,
  y = 0,
  onLoad,
  width,
  src,
}: PosProps & SizeProps & CommonProps) {
  return (
    <img
      src={src}
      style={{ top: y, left: x, width }}
      alt="border top"
      className="absolute"
      onLoad={onLoad}
    />
  );
}

export function CornerBottomRight({
  x = 0,
  y = 0,
  src,
}: PosProps & CommonProps) {
  return (
    <img
      src={src}
      style={{ top: y, left: x }}
      alt="border top"
      className="absolute"
    />
  );
}
