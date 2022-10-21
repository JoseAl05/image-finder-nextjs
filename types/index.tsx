import { ReactNode, SetStateAction } from "react";

export interface Children {
  children?: ReactNode
}

export interface ImageProps {
  photographer:string;
  photographer_url:string;
  src: {
    large: string;
    medium:string;
    small:string;
  };
  alt:string;
}
export interface searchFormProps {
  setImages:React.Dispatch<SetStateAction<never[]>>;
  setPage:React.Dispatch<SetStateAction<number>>;
  setHasMore:React.Dispatch<SetStateAction<boolean>>;
}

export interface Images {
  total_results: number,
  page: number,
  per_page: number,
  photos: [
    {
      id: number,
      width: number,
      height: number,
      url: string,
      photographer: string,
      photographer_url: string,
      photographer_id: number,
      avg_color: string,
      src: {
        original: string,
        large2x: string,
        large: string,
        medium: string,
        small: string,
        portrait: string,
        landscape: string,
        tiny: string
      },
      liked: boolean,
      alt: string
    }
  ],
  next_page: string
}

export interface ImageModalProps {
  isVisible:boolean;
  onClose():void;
  image:{};
}