import EditImage from "./EditImage";

interface Props {}

export default function EditView(props: Props) {
  return (
    <div className="bg-slate-400 p-3">
      <EditImage />
    </div>
  );
}
