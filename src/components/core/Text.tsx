import classNames from "classnames";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fontSize?: number;
}

export default function Text(props: PropsWithChildren<Props>) {
  return (
    <span
      className={classNames(
        "text-white absolute scale-x-110 px-5",
        props.className
      )}
      style={{
        top: props.y,
        left: props.x,
        height: props.height,
        width: props.width,
        fontSize: props.fontSize,
      }}
    >
      {props.children}
    </span>
  );
}
