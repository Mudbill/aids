import { PropsWithChildren } from "react";

export default function Preview(props: PropsWithChildren<{}>) {
  return (
    <div
      className="mx-auto my-10 border-4 border-slate-600 relative bg-mono w-[800px] h-[600px] overflow-hidden cursor-custom"
      children={props.children}
    />
  );
}
