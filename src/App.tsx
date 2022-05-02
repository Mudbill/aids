import EditView from "./components/EditView";
import Preview from "./components/Preview";
import { EditorProvider } from "./contexts/EditorContext";
import { ImageContextProvider } from "./contexts/ImageContext";

export default function App() {
  return (
    <ImageContextProvider>
      <EditorProvider>
        <div className="flex flex-col absolute inset-0">
          {/* <MenuBar>
            <Menu label="File" id="file">
              <MenuItem id="new">New file</MenuItem>
              <MenuItem id="open">Open file</MenuItem>
              <MenuItem id="save">Quit</MenuItem>
            </Menu>
            <Menu label="Edit" id="edit">
              <MenuItem id="undo">Undo</MenuItem>
              <SubMenu label="Do some action">
                <MenuItem>Stuff</MenuItem>
              </SubMenu>
            </Menu>
          </MenuBar> */}
          <div className="flex h-full">
            <div className="min-w-[300px] bg-slate-300">
              <EditView />
            </div>
            <div className="">
              <div className="bg-slate-200 py-3">
                <h1 className="text-center text-2xl">
                  Amnesia Interface Designer Software
                </h1>
                <small className="text-center block">Beta</small>
              </div>
              <div className="p-4">
                <Preview />
              </div>
            </div>
          </div>
        </div>
      </EditorProvider>
    </ImageContextProvider>
  );
}
