import { useEditorContext } from "../../contexts/EditorContext";

interface Props {}

export default function EditHealth(props: Props) {
  const { health, dispatch } = useEditorContext();
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <div className="flex flex-col">
          <label>Icon center X</label>
          <input
            type="number"
            value={health.center.x}
            onChange={(e) =>
              dispatch({
                health: {
                  ...health,
                  center: { ...health.center, x: Number(e.target.value) },
                },
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Icon center Y</label>
          <input
            type="number"
            value={health.center.y}
            onChange={(e) =>
              dispatch({
                health: {
                  ...health,
                  center: { ...health.center, y: Number(e.target.value) },
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
            value={health.frameSize.x}
            onChange={(e) =>
              dispatch({
                health: {
                  ...health,
                  frameSize: { ...health.frameSize, x: Number(e.target.value) },
                },
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Frame size Y</label>
          <input
            type="number"
            value={health.frameSize.y}
            onChange={(e) =>
              dispatch({
                health: {
                  ...health,
                  frameSize: { ...health.frameSize, y: Number(e.target.value) },
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
            value={health.frameOffset.x}
            onChange={(e) =>
              dispatch({
                health: {
                  ...health,
                  frameOffset: {
                    ...health.frameOffset,
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
            value={health.frameOffset.y}
            onChange={(e) =>
              dispatch({
                health: {
                  ...health,
                  frameOffset: {
                    ...health.frameOffset,
                    y: Number(e.target.value),
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
