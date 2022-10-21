import Image from "next/image";
import React from "react";
import { ImageModalProps } from "../../../types"
import { Transition } from '@headlessui/react'


const ImageModal: React.FC<ImageModalProps> = ({ isVisible, onClose, image }: ImageModalProps) => {

    if (!isVisible) return null;

    const handleClose = (e: any) => {
        if (e.target.id === 'imageModal') onClose();
    }
    return (
        <>

            <Transition
                appear
                show={isVisible}
                enter="transition duration-100"
                enterFrom="opacity-0 scale-0"
                enterTo="opacity-100 scale-110"
                leave="transform duration-300 transition ease-in-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-0"
                className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center"
                id="imageModal"
                onClick={handleClose}>
                <div className="flex flex-col w-1/2 h-[60vh]">
                    <button className="text-white text-2xl place-self-end hover:bg-red-500 rounded-lg p-2 transition-colors" onClick={() => onClose()}>X</button>

                    <div className="bg-black rounded-lg p-3">
                        <div className="text-white text-2xl text-center">
                            {image.alt} by <a href={image.photographer_url} className="text-blue-400 cursor-pointer hover:text-blue-600 font-bold">@{image.photographer}</a>
                        </div>
                        <div className="flex justify-around items-center m-5">
                            <div className="w-1/2 h-full">
                                <Image src={image.src.large} layout="responsive" width='100%' height='100%' alt={image.alt} quality={70} loading="lazy" className="" />
                            </div>
                            <div className="flex flex-col items-end">
                                <h1 className="text-3xl text-white mb-10">Descargar</h1>
                                <a
                                    type="button"
                                    href={image.src.original}
                                    className="bg-green-700 p-2 w-28 rounded-md my-3 text-center text-xl transition-all hover:scale-110 hover:bg-blue-600"
                                    download={`${image.alt}_${image.photographer}.jpg`}
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    Original
                                </a>
                                <a
                                    type="button"
                                    href={image.src.large}
                                    className="bg-green-700 p-2 w-24 rounded-md my-3 text-center text-lg transition-all hover:scale-110 hover:bg-blue-600"
                                    download={`${image.alt}_${image.photographer}.jpg`}
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    Grande
                                </a>
                                <a
                                    type="button"
                                    href={image.src.medium}
                                    className="bg-green-700 p-2 w-20 rounded-md my-3 text-center text-base transition-all hover:scale-110 hover:bg-blue-600"
                                    download={`${image.alt}_${image.photographer}.jpg`}
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    Mediano
                                </a>
                                <a
                                    type="button"
                                    href={image.src.small}
                                    className="bg-green-700 p-2 w-16 rounded-md my-3 text-center text-sm transition-all hover:scale-110 hover:bg-blue-600"
                                    download={`${image.alt}_${image.photographer}.jpg`}
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    Peque;o
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    );
}

export default ImageModal;