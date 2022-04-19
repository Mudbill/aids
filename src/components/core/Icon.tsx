import classNames from "classnames";
import { ReactEventHandler, useCallback, useEffect, useState } from "react";

interface Props {
  src: string;
  getImageData?: (size: {
    x: number;
    y: number;
    width: number;
    height: number;
  }) => any;
  center: {
    x: number;
    y: number;
  };
  wireframe?: boolean;
}

export default function Icon(props: Props) {
  const { getImageData = () => {} } = props;
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const emitSize = useCallback(
    (width: number, height: number) => {
      const x = -Math.floor(width / 2);
      const y = -Math.floor(height / 2);

      setOffset({ x, y });
      setSize({ width, height });
      getImageData({
        x: props.center.x + x,
        y: props.center.y + y,
        width,
        height,
      });
    },
    [getImageData, props.center]
  );

  const handleLoad: ReactEventHandler<HTMLImageElement> = useCallback(
    (e) => {
      const width = e.currentTarget.naturalWidth;
      const height = e.currentTarget.naturalHeight;
      emitSize(width, height);
    },
    [emitSize]
  );

  useEffect(() => {
    emitSize(size.width, size.height);
  }, [props.center]);

  return (
    <img
      className={classNames(
        "absolute",
        props.wireframe &&
          "outline outline-cyan-400 outline-1 outline-offset-[-1px]"
      )}
      src={props.src}
      style={{
        top: props.center.y + offset.y,
        left: props.center.x + offset.x,
        minWidth: size.width,
        minHeight: size.height,
      }}
      draggable={false}
      onLoad={handleLoad}
    />
  );
}
