import { useEditorContext } from "../../contexts/EditorContext";

interface Props {
  type: "health" | "sanity" | "tinderbox" | "oil" | "journal";
  label: string;
}

export default function EditBasic(props: Props) {
  const { [props.type]: basic, dispatch } = useEditorContext();
  return (
    <div className="flex flex-col border p-2">
      <h2 className="text-lg">{props.label}</h2>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <label>Icon center X</label>
          <input
            type="number"
            value={basic.center.x}
            onChange={(e) =>
              dispatch({
                [props.type]: {
                  ...basic,
                  center: { ...basic.center, x: Number(e.target.value) },
                },
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Icon center Y</label>
          <input
            type="number"
            value={basic.center.y}
            onChange={(e) =>
              dispatch({
                [props.type]: {
                  ...basic,
                  center: { ...basic.center, y: Number(e.target.value) },
                },
              })
            }
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <label>Frame size X</label>
          <input
            type="number"
            value={basic.frameSize.x}
            onChange={(e) =>
              dispatch({
                [props.type]: {
                  ...basic,
                  frameSize: { ...basic.frameSize, x: Number(e.target.value) },
                },
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Frame size Y</label>
          <input
            type="number"
            value={basic.frameSize.y}
            onChange={(e) =>
              dispatch({
                [props.type]: {
                  ...basic,
                  frameSize: { ...basic.frameSize, y: Number(e.target.value) },
                },
              })
            }
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <label>Frame offset X</label>
          <input
            type="number"
            value={basic.frameOffset.x}
            onChange={(e) =>
              dispatch({
                [props.type]: {
                  ...basic,
                  frameOffset: {
                    ...basic.frameOffset,
                    x: Number(e.target.value),
                  },
                },
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Frame offset Y</label>
          <input
            type="number"
            value={basic.frameOffset.y}
            onChange={(e) =>
              dispatch({
                [props.type]: {
                  ...basic,
                  frameOffset: {
                    ...basic.frameOffset,
                    y: Number(e.target.value),
                  },
                },
              })
            }
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <label>Padding left</label>
          <input
            type="number"
            value={basic.frameHPadding.left}
            onChange={(e) =>
              dispatch({
                [props.type]: {
                  ...basic,
                  frameHPadding: {
                    ...basic.frameHPadding,
                    left: Number(e.target.value),
                  },
                },
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Padding right</label>
          <input
            type="number"
            value={basic.frameHPadding.right}
            onChange={(e) =>
              dispatch({
                [props.type]: {
                  ...basic,
                  frameHPadding: {
                    ...basic.frameHPadding,
                    right: Number(e.target.value),
                  },
                },
              })
            }
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <label>Padding top</label>
          <input
            type="number"
            value={basic.frameVPadding.top}
            onChange={(e) =>
              dispatch({
                [props.type]: {
                  ...basic,
                  frameVPadding: {
                    ...basic.frameVPadding,
                    top: Number(e.target.value),
                  },
                },
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Padding bottom</label>
          <input
            type="number"
            value={basic.frameVPadding.bottom}
            onChange={(e) =>
              dispatch({
                [props.type]: {
                  ...basic,
                  frameVPadding: {
                    ...basic.frameVPadding,
                    bottom: Number(e.target.value),
                  },
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
