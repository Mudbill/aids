import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import merge from "lodash.merge";

type EditorContextType = EditorContextState & {
  dispatch: React.Dispatch<Partial<EditorContextState>>;
};

const EditorContext = createContext<EditorContextType>(null!);

export type ActiveElement =
  | "health"
  | "sanity"
  | "tinderbox"
  | "oil"
  | "journal"
  | "slots"
  | "textbox";

type IconAndFrameData = {
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

export type TextBoxData = IconAndFrameData & {
  textWidth: number;
  headerCenter: { x: number; y: number };
};

type EditorContextState = {
  active?: ActiveElement;
  health: IconAndFrameData;
  sanity: IconAndFrameData;
  tinderbox: IconAndFrameData;
  journal: IconAndFrameData;
  oil: IconAndFrameData;
  textbox: TextBoxData;
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
    sanity: {
      center: {
        x: 75,
        y: 418,
      },
      frameSize: {
        x: 100,
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
        x: 7,
        y: 0,
      },
    },
    tinderbox: {
      center: {
        x: 720,
        y: 127,
      },
      frameSize: {
        x: 100,
        y: 90,
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
        x: -28,
        y: -15,
      },
    },
    journal: {
      center: {
        x: 720,
        y: 472,
      },
      frameSize: {
        x: 100,
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
        x: -5,
        y: 0,
      },
    },
    oil: {
      center: {
        x: 720,
        y: 293,
      },
      frameSize: {
        x: 100,
        y: 100,
      },
      frameHPadding: {
        left: 0,
        right: 0,
      },
      frameVPadding: {
        top: 10,
        bottom: 15,
      },
      frameOffset: {
        x: -32,
        y: -5,
      },
    },
    textbox: {
      center: {
        x: 400,
        y: 440,
      },
      frameSize: {
        x: -1,
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
        x: 0,
        y: 0,
      },
      textWidth: 456,
      headerCenter: {
        x: 400,
        y: 420,
      },
    },
  });

  const value = { ...state, dispatch };

  return <EditorContext.Provider value={value} children={children} />;
}

export function useEditorContext() {
  return useContext(EditorContext);
}
