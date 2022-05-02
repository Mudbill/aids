import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePopper } from "react-popper";
import uniqueId from "lodash.uniqueid";
import classNames from "classnames";

interface MenuContextType {
  openedMenu?: string;
  setOpenedMenu: React.Dispatch<React.SetStateAction<string | undefined>>;
  onSelectMenuItem: (id: string) => void;
}

const MenuContext = createContext<MenuContextType>({
  setOpenedMenu: () => {},
  onSelectMenuItem: () => {},
});

export function useMenuContext() {
  return useContext(MenuContext);
}

//------------------------------------------------------------------------------

interface MenuBarProps {
  onSelectMenuItem?: (id: string) => void;
}

export function MenuBar(props: PropsWithChildren<MenuBarProps>) {
  const [openedMenu, setOpenedMenu] = useState<string>();
  const { onSelectMenuItem = () => {} } = props;

  const value: MenuContextType = {
    openedMenu,
    setOpenedMenu,
    onSelectMenuItem,
  };

  return (
    <MenuContext.Provider value={value}>
      <div className="bg-slate-300 flex">{props.children}</div>
    </MenuContext.Provider>
  );
}

//------------------------------------------------------------------------------

interface MenuProps {
  label: string;
  id?: string;
}

export function Menu(props: PropsWithChildren<MenuProps>) {
  const [refElement, setRefElement] = useState<HTMLDivElement | null>(null);
  const id = useRef(props.id || uniqueId("menu-"));

  const { setOpenedMenu, openedMenu } = useMenuContext();

  const handleClick = useCallback(() => {
    setOpenedMenu((openedMenu) => {
      if (openedMenu === id.current) return undefined;
      return id.current;
    });
  }, [setOpenedMenu]);

  const handleMouseEnter = useCallback(() => {
    if (openedMenu !== undefined) {
      setOpenedMenu(id.current);
    }
  }, [openedMenu, setOpenedMenu]);

  return (
    <div ref={setRefElement}>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className={classNames(
          "px-2 text-sm hover:bg-slate-400 h-full",
          openedMenu === id.current ? "bg-slate-400" : ""
        )}
      >
        {props.label}
      </button>
      {openedMenu === id.current && (
        <CascadeMenu
          refElement={refElement}
          refClickOutside={refElement}
          id={id.current}
          placement="bottom-start"
        >
          {props.children}
        </CascadeMenu>
      )}
    </div>
  );
}

//------------------------------------------------------------------------------

interface CascadeMenuProps {
  refElement: HTMLElement | null;
  refClickOutside: HTMLElement | null;
  id?: string;
  placement: "bottom-start" | "right-start";
}

export function CascadeMenu(props: PropsWithChildren<CascadeMenuProps>) {
  const [popElement, setPopElement] = useState<HTMLUListElement | null>(null);
  const popper = usePopper(props.refElement, popElement, {
    placement: props.placement,
  });

  const { setOpenedMenu, openedMenu } = useMenuContext();

  useClickOutside(props.refClickOutside, () => {
    if (openedMenu === props.id) {
      setOpenedMenu(undefined);
    }
  });

  return (
    <ul
      className="flex flex-col bg-slate-400"
      ref={setPopElement}
      style={popper.styles.popper}
      {...popper.attributes.popper}
    >
      {props.children}
    </ul>
  );
}

//------------------------------------------------------------------------------

interface MenuItemProps {
  id?: string;
}

export function MenuItem(props: PropsWithChildren<MenuItemProps>) {
  const { onSelectMenuItem, setOpenedMenu } = useMenuContext();

  const handleClick = () => {
    setOpenedMenu(undefined);
    if (props.id) onSelectMenuItem(props.id);
  };

  return (
    <li className="flex">
      <button
        className="px-2 py-0.5 w-full min-w-[100px] text-sm text-left hover:bg-slate-500"
        onClick={handleClick}
      >
        {props.children}
      </button>
    </li>
  );
}

//------------------------------------------------------------------------------

interface SubMenuProps {
  label: string;
}

export function SubMenu(props: PropsWithChildren<SubMenuProps>) {
  const [refElement, setRefElement] = useState<HTMLLIElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <li
      className="flex"
      ref={setRefElement}
      onMouseEnter={() => console.log("enter")}
      onMouseLeave={() => console.log("leave")}
    >
      <button
        className={classNames(
          isOpen ? "bg-slate-500" : "",
          "px-2 py-0.5 w-full min-w-[100px] text-sm text-left hover:bg-slate-500 flex justify-between gap-2"
        )}
        onClick={handleClick}
      >
        {props.label}
        <span>&gt;</span>
      </button>
      {isOpen && (
        <CascadeMenu
          placement="right-start"
          refElement={refElement}
          refClickOutside={refElement}
        >
          {props.children}
        </CascadeMenu>
      )}
    </li>
  );
}

//------------------------------------------------------------------------------

function useClickOutside(ref: HTMLElement | null, handler: () => void) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (ref?.contains(e.target as Node) === false) {
        savedHandler.current();
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [ref]);
}
