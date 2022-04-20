import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const defaultImages = {
  imageBorderGenericTop: "./assets/images/inventory_frame_generic_border_u.png",
  imageBorderGenericLeft:
    "./assets/images/inventory_frame_generic_border_l.png",
  imageBorderGenericRight:
    "./assets/images/inventory_frame_generic_border_r.png",
  imageBorderGenericBottom:
    "./assets/images/inventory_frame_generic_border_d.png",

  imageCornerGenericTopLeft:
    "./assets/images/inventory_frame_generic_corner_lu.png",
  imageCornerGenericTopRight:
    "./assets/images/inventory_frame_generic_corner_ru.png",
  imageCornerGenericBottomLeft:
    "./assets/images/inventory_frame_generic_corner_ld.png",
  imageCornerGenericBottomRight:
    "./assets/images/inventory_frame_generic_corner_rd.png",

  imageBorderHealthTop: "./assets/images/inventory_frame_health_border_u.png",
  imageBorderHealthLeft: "./assets/images/inventory_frame_health_border_l.png",
  imageBorderHealthRight: "./assets/images/inventory_frame_health_border_r.png",
  imageBorderHealthBottom:
    "./assets/images/inventory_frame_health_border_d.png",

  imageCornerHealthTopLeft:
    "./assets/images/inventory_frame_health_corner_lu.png",
  imageCornerHealthTopRight:
    "./assets/images/inventory_frame_health_corner_ru.png",
  imageCornerHealthBottomLeft:
    "./assets/images/inventory_frame_health_corner_ld.png",
  imageCornerHealthBottomRight:
    "./assets/images/inventory_frame_health_corner_rd.png",

  imageBorderSanityTop: "./assets/images/inventory_frame_sanity_border_u.png",
  imageBorderSanityLeft: "./assets/images/inventory_frame_sanity_border_l.png",
  imageBorderSanityRight: "./assets/images/inventory_frame_sanity_border_r.png",
  imageBorderSanityBottom:
    "./assets/images/inventory_frame_sanity_border_d.png",

  imageCornerSanityTopLeft:
    "./assets/images/inventory_frame_sanity_corner_lu.png",
  imageCornerSanityTopRight:
    "./assets/images/inventory_frame_sanity_corner_ru.png",
  imageCornerSanityBottomLeft:
    "./assets/images/inventory_frame_sanity_corner_ld.png",
  imageCornerSanityBottomRight:
    "./assets/images/inventory_frame_sanity_corner_rd.png",

  imageHealthIcon: "./assets/images/inventory_health_100.png",
  imageSanityIcon: "./assets/images/inventory_sanity_100.png",
  imageTinderboxIcon: "./assets/images/inventory_tinderboxes.png",
  imageOilBgIcon: "./assets/images/inventory_oil_bg.png",
  imageOilFgIcon: "./assets/images/inventory_oil_fg.png",
  imageOilLiquid: "./assets/images/inventory_oil_liquid.png",
  imageJournalIcon: "./assets/images/inventory_journal.png",
};

export type ImageState = typeof defaultImages;

type ImageContextType = ImageState & {
  setImage: (type: keyof ImageState, image: File) => void;
};

function reducer(state: ImageState, newState: Partial<ImageState>) {
  return {
    ...state,
    ...newState,
  };
}

const ImageContext = createContext<ImageContextType>(null!);

export function ImageContextProvider({ children }: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, defaultImages);
  const [selectedImage, setSelectedImage] = useState<keyof ImageState>();
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

  useEffect(() => {
    if (!selectedImage) return;
    dispatch({
      [selectedImage]: imageStream,
    });
  }, [imageStream, selectedImage]);

  const setImage = useCallback((type: keyof ImageState, image: File) => {
    setImageFile(image);
    setSelectedImage(type);
  }, []);

  const value: ImageContextType = {
    ...state,
    setImage,
  };

  return <ImageContext.Provider value={value} children={children} />;
}

export function useImageContext() {
  return useContext(ImageContext);
}

export function useFrameImages(style: "generic" | "health" | "sanity") {
  const imageState = useImageContext();
  switch (style) {
    case "generic":
      return {
        borderT: imageState.imageBorderGenericTop,
        borderL: imageState.imageBorderGenericLeft,
        borderR: imageState.imageBorderGenericRight,
        borderB: imageState.imageBorderGenericBottom,
        cornerTL: imageState.imageCornerGenericTopLeft,
        cornerTR: imageState.imageCornerGenericTopRight,
        cornerBL: imageState.imageCornerGenericBottomLeft,
        cornerBR: imageState.imageCornerGenericBottomRight,
      };
    case "health":
      return {
        borderT: imageState.imageBorderHealthTop,
        borderL: imageState.imageBorderHealthLeft,
        borderR: imageState.imageBorderHealthRight,
        borderB: imageState.imageBorderHealthBottom,
        cornerTL: imageState.imageCornerHealthTopLeft,
        cornerTR: imageState.imageCornerHealthTopRight,
        cornerBL: imageState.imageCornerHealthBottomLeft,
        cornerBR: imageState.imageCornerHealthBottomRight,
      };
    case "sanity":
      return {
        borderT: imageState.imageBorderSanityTop,
        borderL: imageState.imageBorderSanityLeft,
        borderR: imageState.imageBorderSanityRight,
        borderB: imageState.imageBorderSanityBottom,
        cornerTL: imageState.imageCornerSanityTopLeft,
        cornerTR: imageState.imageCornerSanityTopRight,
        cornerBL: imageState.imageCornerSanityBottomLeft,
        cornerBR: imageState.imageCornerSanityBottomRight,
      };
  }
}
