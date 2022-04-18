import { ChangeEventHandler, useCallback, useState } from "react";
import { ImageState, useImageContext } from "../../contexts/ImageContext";

interface Props {}

export default function EditImage(props: Props) {
  const { setImage, ...images } = useImageContext();
  const [selectedPart, setSelectedPart] = useState<keyof ImageState>(
    "imageBorderGenericBottom"
  );
  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (!e.currentTarget.files || !e.currentTarget.files.length) return;
      const file = e.currentTarget.files[0];
      setImage(selectedPart, file);
    },
    [setImage, selectedPart]
  );

  return (
    <>
      <select
        value={selectedPart}
        onChange={(e) => setSelectedPart(e.target.value as keyof ImageState)}
      >
        {Object.keys(images).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>{" "}
      <input type="file" onChange={handleChangeFile} />
    </>
  );
}
