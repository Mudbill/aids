import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

type EditorContextType = EditorContextState & {
  dispatch: React.Dispatch<Partial<EditorContextState>>;
};

const EditorContext = createContext<EditorContextType>(null!);

type EditorContextState = {
  active?:
    | "health"
    | "sanity"
    | "tinderbox"
    | "oil"
    | "journal"
    | "slots"
    | "textbox";
  health: {
    center: {
      x: number;
      y: number;
    };
    frameSize: {
      x: number;
      y: number;
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
  return { ...state, ...newState };
}

export function EditorProvider({ children }: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, {
    health: {
      center: {
        x: 75,
        y: 168,
      },
      frameSize: {
        x: 110,
        y: -1,
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

  const value = { ...state, dispatch };

  return <EditorContext.Provider value={value} children={children} />;
}

export function useEditorContext() {
  return useContext(EditorContext);
}
