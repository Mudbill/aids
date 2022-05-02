import { ChangeEventHandler, useCallback, useState } from "react";
import { ImageState, useImageContext } from "../../contexts/ImageContext";

interface Props {}

export default function EditImage(props: Props) {
  const { setImage, ...images } = useImageContext();
  const [selectedPart, setSelectedPart] = useState<keyof ImageState | "">("");
  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (!selectedPart) return;
      if (!e.currentTarget.files || !e.currentTarget.files.length) return;
      const file = e.currentTarget.files[0];
      setImage(selectedPart, file);
    },
    [setImage, selectedPart]
  );

  return (
    <div className="border p-2">
      <select
        value={selectedPart || ""}
        onChange={(e) => setSelectedPart(e.target.value as keyof ImageState)}
      >
        <option value="">- Select image part -</option>
        <optgroup label="Image parts">
          {Object.keys(images).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </optgroup>
      </select>{" "}
      <input
        type="file"
        onChange={handleChangeFile}
        disabled={selectedPart === ""}
      />
      {selectedPart !== "" && (
        <img src={images[selectedPart]} className="border border-red-500 m-2" />
      )}
    </div>
  );
}
