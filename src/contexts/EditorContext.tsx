import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

const EditorContext = createContext<EditorContextState>(null!);

type EditorContextState = {
  health: {
    center: {
      x: number;
      y: number;
    };
    frameSize: {
      width: number;
      height: number;
    };
    frameHPadding: {
      left: number;
      right: number;
    };
    frameVPadding: {
      top: number;
      bottom: number;
    };
    frameOffset: {
      x: number;
      y: number;
    };
  };
};

function reducer(
  state: EditorContextState,
  newState: Partial<EditorContextState>
) {
  return state;
}

export function EditorProvider({ children }: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, {
    health: {
      center: {
        x: 1,
        y: 1,
      },
      frameSize: {
        width: 110,
        height: -1,
      },
      frameHPadding: {
        left: 0,
        right: 0,
      },
      frameVPadding: {
        top: 0,
        bottom: 0,
      },
      frameOffset: {
        x: 18,
        y: 0,
      },
    },
  });

  return <EditorContext.Provider value={state} children={children} />;
}

export function useEditorContext() {
  return useContext(EditorContext);
}
