import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type ActiveSection = "Tinderboxes" | "Health" | "Sanity" | "Oil" | "Journal";

type EditorContextType = {
  x: number;
  y: number;
  setPos: (x: number, y: number) => void;
  activePart?: ActiveSection;
  setActivePart: (part: ActiveSection) => void;
  imageStream: string;
  setImage: (file: File) => void;
};

const EditorContext = createContext<EditorContextType>(null!);

export function EditorProvider({ children }: PropsWithChildren<{}>) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [activePart, setActivePart] = useState<ActiveSection>();
  const [imageFile, setImageFile] = useState<File>();
  const [imageStream, setImageStream] = useState("");

  useEffect(() => {
    if (!imageFile) return setImageStream("");

    const objectUrl = URL.createObjectURL(imageFile);
    setImageStream(objectUrl);
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [imageFile]);

  const value: EditorContextType = {
    x,
    y,
    setPos: (x, y) => {
      setX(x);
      setY(y);
    },
    imageStream,
    setImage: setImageFile,
    activePart,
    setActivePart,
  };
  return <EditorContext.Provider value={value} children={children} />;
}

export function useEditorContext() {
  return useContext(EditorContext);
}
