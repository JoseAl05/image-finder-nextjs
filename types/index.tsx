import { ReactNode, SetStateAction } from "react";

export interface Children {
  children?: ReactNode
}

export interface ImageProps {
  photographer:string;
  photographer_url:string;
  src: {
    original: string;
    large: string;
    medium:string;
    small:string;
  };
  alt:string;
}
export interface SearchFormProps {
  page?:number;
  setImages:React.Dispatch<SetStateAction<never[]>>;
  setPage:React.Dispatch<SetStateAction<number>>;
  setHasMore:React.Dispatch<SetStateAction<boolean>>;
}

export interface ImageModalProps {
  isVisible:boolean;
  onClose():void;
  image:ImageProps;
}