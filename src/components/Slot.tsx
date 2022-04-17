interface Props {
  width: number;
  height: number;
}

export default function Slot({ width, height }: Props) {
  return <div className="bg-black" style={{ width, height }} />;
}
