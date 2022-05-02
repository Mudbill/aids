import { ChangeEventHandler, useCallback } from "react";
import { TextBoxData, useEditorContext } from "../../contexts/EditorContext";

interface Props {}

export default function EditTextBox(props: Props) {
  const { textbox, dispatch } = useEditorContext();
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const name = e.currentTarget.name as keyof TextBoxData;
      const value = Number(e.currentTarget.value);
      dispatch({
        textbox: {
          ...textbox,
          [name]: value,
        },
      });
    },
    [dispatch, textbox]
  );

  return (
    <div className="border p-2 flex flex-col gap-2">
      <span className="text-lg">Text box options</span>
      <label className="flex w-full justify-between items-center">
        Description text width:
        <input
          type="number"
          value={textbox.textWidth}
          onChange={handleChange}
          name="textWidth"
        />
      </label>
      <label className="flex w-full justify-between items-center">
        Item header pos X:
        <input
          type="number"
          value={textbox.headerCenter.x}
          onChange={(e) =>
            dispatch({
              textbox: {
                ...textbox,
                headerCenter: {
                  ...textbox.headerCenter,
                  x: Number(e.target.value),
                },
              },
            })
          }
        />
      </label>
      <label className="flex w-full justify-between items-center">
        Item header pos Y:
        <input
          type="number"
          value={textbox.headerCenter.y}
          onChange={(e) =>
            dispatch({
              textbox: {
                ...textbox,
                headerCenter: {
                  ...textbox.headerCenter,
                  y: Number(e.target.value),
                },
              },
            })
          }
        />
      </label>
      <hr />
      <label className="flex w-full justify-between items-center">
        Item description pos X:
        <input
          type="number"
          value={textbox.center.x}
          onChange={(e) =>
            dispatch({
              textbox: {
                ...textbox,
                center: {
                  ...textbox.center,
                  x: Number(e.target.value),
                },
              },
            })
          }
        />
      </label>
      <label className="flex w-full justify-between items-center">
        Item description pos Y:
        <input
          type="number"
          value={textbox.center.y}
          onChange={(e) =>
            dispatch({
              textbox: {
                ...textbox,
                center: {
                  ...textbox.center,
                  y: Number(e.target.value),
                },
              },
            })
          }
        />
      </label>
      <hr />
      <label className="flex w-full justify-between items-center">
        Frame width:
        <input
          type="number"
          value={textbox.frameSize.x}
          onChange={(e) =>
            dispatch({
              textbox: {
                ...textbox,
                frameSize: {
                  ...textbox.frameSize,
                  x: Number(e.target.value),
                },
              },
            })
          }
        />
      </label>
      <label className="flex w-full justify-between items-center">
        Frame height:
        <input
          type="number"
          value={textbox.frameSize.y}
          onChange={(e) =>
            dispatch({
              textbox: {
                ...textbox,
                frameSize: {
                  ...textbox.frameSize,
                  y: Number(e.target.value),
                },
              },
            })
          }
        />
      </label>
      <hr />
      <label className="flex w-full justify-between items-center">
        Frame padding top:
        <input type="number" />
      </label>
      <label className="flex w-full justify-between items-center">
        Frame padding bottom:
        <input type="number" />
      </label>
      <label className="flex w-full justify-between items-center">
        Frame padding left:
        <input type="number" />
      </label>
      <label className="flex w-full justify-between items-center">
        Frame padding right:
        <input type="number" />
      </label>
      <hr />
      <label className="flex w-full justify-between items-center">
        Frame offset X:
        <input type="number" />
      </label>
      <label className="flex w-full justify-between items-center">
        Frame offset Y:
        <input type="number" />
      </label>
    </div>
  );
}
