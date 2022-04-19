import EditView from "./components/EditView";
import Preview from "./components/Preview";
import { EditorProvider } from "./contexts/EditorContext";
import { ImageContextProvider } from "./contexts/ImageContext";

export default function App() {
  return (
    <ImageContextProvider>
      <EditorProvider>
        <h1 className="text-center text-2xl mt-4">
          Amnesia Interface Designer Software
        </h1>
        <small className="text-center block">Beta</small>
        <div className="mt-4 flex">
          <div>
            <Preview />
          </div>
          <div className="bg-slate-300">
            <EditView />
          </div>
        </div>
      </EditorProvider>
    </ImageContextProvider>
  );
}
