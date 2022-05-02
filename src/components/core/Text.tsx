import classNames from "classnames";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  fontSize?: number;
  centered?: boolean;
}

export default function Text(props: PropsWithChildren<Props>) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!props.centered) return;
    setWidth(ref.current?.clientWidth || 0);
  }, [props.centered]);

  return (
    <span
      ref={ref}
      className={classNames(
        "text-white absolute scale-x-110 px-5",
        props.className
      )}
      style={{
        top: props.y,
        left: props.x - width / 2,
        height: props.height,
        width: props.width,
        fontSize: props.fontSize,
      }}
    >
      {props.children}
    </span>
  );
}
