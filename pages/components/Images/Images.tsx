import React, { useState } from "react";
import Image from "next/image";
import Masonry from 'react-masonry-css'
import ImageModal from "../ImageModal/ImageModal";



const Images = ({ images }: any) => {

    const [isVisible, setIsVisible] = useState(false);
    const [image, setImage] = useState({});
    console.log(images);

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
                {images ? images.map((image: string, index: number) => {
                    return (
                        <div key={index}>
                            <div className="w-full p-2 break-inside-avoid mb-4">
                                <a
                                    type="button"
                                    onClick={() => {
                                        setIsVisible(true);
                                        setImage(image);
                                    }}>
                                    <Image src={image.src.large} layout="responsive" width={1920} height={1080} alt={image.alt} quality={70} loading="lazy" className="" />
                                </a>
                            </div>
                        </div>
                    )
                }) : <></>}

                    <ImageModal isVisible={isVisible} onClose={() => setIsVisible(false)} image={image} />
            </div>

        </>
    );
}

export default Images;