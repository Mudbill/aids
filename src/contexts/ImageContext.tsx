import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import imageBorderGenericTop from "../resources/textures/inventory_frame_generic_border_u.png";
import imageBorderGenericLeft from "../resources/textures/inventory_frame_generic_border_l.png";
import imageBorderGenericRight from "../resources/textures/inventory_frame_generic_border_r.png";
import imageBorderGenericBottom from "../resources/textures/inventory_frame_generic_border_d.png";

import imageCornerGenericTopLeft from "../resources/textures/inventory_frame_generic_corner_lu.png";
import imageCornerGenericTopRight from "../resources/textures/inventory_frame_generic_corner_ru.png";
import imageCornerGenericBottomLeft from "../resources/textures/inventory_frame_generic_corner_ld.png";
import imageCornerGenericBottomRight from "../resources/textures/inventory_frame_generic_corner_rd.png";

import imageBorderHealthTop from "../resources/textures/inventory_frame_health_border_u.png";
import imageBorderHealthLeft from "../resources/textures/inventory_frame_health_border_l.png";
import imageBorderHealthRight from "../resources/textures/inventory_frame_health_border_r.png";
import imageBorderHealthBottom from "../resources/textures/inventory_frame_health_border_d.png";

import imageCornerHealthTopLeft from "../resources/textures/inventory_frame_health_corner_lu.png";
import imageCornerHealthTopRight from "../resources/textures/inventory_frame_health_corner_ru.png";
import imageCornerHealthBottomLeft from "../resources/textures/inventory_frame_health_corner_ld.png";
import imageCornerHealthBottomRight from "../resources/textures/inventory_frame_health_corner_rd.png";

import imageBorderSanityTop from "../resources/textures/inventory_frame_sanity_border_u.png";
import imageBorderSanityLeft from "../resources/textures/inventory_frame_sanity_border_l.png";
import imageBorderSanityRight from "../resources/textures/inventory_frame_sanity_border_r.png";
import imageBorderSanityBottom from "../resources/textures/inventory_frame_sanity_border_d.png";

import imageCornerSanityTopLeft from "../resources/textures/inventory_frame_sanity_corner_lu.png";
import imageCornerSanityTopRight from "../resources/textures/inventory_frame_sanity_corner_ru.png";
import imageCornerSanityBottomLeft from "../resources/textures/inventory_frame_sanity_corner_ld.png";
import imageCornerSanityBottomRight from "../resources/textures/inventory_frame_sanity_corner_rd.png";

import imageHealthIcon from "../resources/textures/inventory_health_100.png";
import imageSanityIcon from "../resources/textures/inventory_sanity_100.png";
import imageTinderboxIcon from "../resources/textures/inventory_tinderboxes.png";
import imageOilBgIcon from "../resources/textures/inventory_oil_bg.png";
import imageOilFgIcon from "../resources/textures/inventory_oil_fg.png";
import imageOilLiquid from "../resources/textures/inventory_oil_liquid.png";
import imageJournalIcon from "../resources/textures/inventory_journal.png";

export type ImageState = {
  imageBorderGenericTop: string;
  imageBorderGenericLeft: string;
  imageBorderGenericRight: string;
  imageBorderGenericBottom: string;

  imageCornerGenericTopLeft: string;
  imageCornerGenericTopRight: string;
  imageCornerGenericBottomLeft: string;
  imageCornerGenericBottomRight: string;

  imageBorderHealthTop: string;
  imageBorderHealthLeft: string;
  imageBorderHealthRight: string;
  imageBorderHealthBottom: string;

  imageCornerHealthTopLeft: string;
  imageCornerHealthTopRight: string;
  imageCornerHealthBottomLeft: string;
  imageCornerHealthBottomRight: string;

  imageBorderSanityTop: string;
  imageBorderSanityLeft: string;
  imageBorderSanityRight: string;
  imageBorderSanityBottom: string;

  imageCornerSanityTopLeft: string;
  imageCornerSanityTopRight: string;
  imageCornerSanityBottomLeft: string;
  imageCornerSanityBottomRight: string;

  imageHealthIcon: string;
  imageSanityIcon: string;
  imageTinderboxIcon: string;
  imageOilBgIcon: string;
  imageOilFgIcon: string;
  imageOilLiquid: string;
  imageJournalIcon: string;
};

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
  const [state, dispatch] = useReducer(reducer, {
    imageBorderGenericTop,
    imageBorderGenericLeft,
    imageBorderGenericRight,
    imageBorderGenericBottom,

    imageCornerGenericTopLeft,
    imageCornerGenericTopRight,
    imageCornerGenericBottomLeft,
    imageCornerGenericBottomRight,

    imageBorderHealthTop,
    imageBorderHealthLeft,
    imageBorderHealthRight,
    imageBorderHealthBottom,

    imageCornerHealthTopLeft,
    imageCornerHealthTopRight,
    imageCornerHealthBottomLeft,
    imageCornerHealthBottomRight,

    imageBorderSanityTop,
    imageBorderSanityLeft,
    imageBorderSanityRight,
    imageBorderSanityBottom,

    imageCornerSanityTopLeft,
    imageCornerSanityTopRight,
    imageCornerSanityBottomLeft,
    imageCornerSanityBottomRight,

    imageHealthIcon,
    imageSanityIcon,
    imageTinderboxIcon,
    imageOilBgIcon,
    imageOilFgIcon,
    imageOilLiquid,
    imageJournalIcon,
  });
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
