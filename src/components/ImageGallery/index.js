import React from 'react'
import Image from "gatsby-image"
import {ImageGalleryWrapper} from "./styles";
import ImageMiniatura from "./ImageMiniatura";

export function ImageGallery({ selectedVariantImageId, images }) {
    const[activeImageMiniatura, setActiveImageMiniatura]= React.useState(
            images.find(({ id }) => id === selectedVariantImageId) || images[0]
        );

        React.useEffect(() => {
            setActiveImageMiniatura(
                images.find(({ id }) => id === selectedVariantImageId) || images[0]
                );
        }, [selectedVariantImageId, images, setActiveImageMiniatura]);

        const handleClick = image => {
            setActiveImageMiniatura(image);
          };

    return ( 
        <ImageGalleryWrapper>
            <div>
                <Image fluid={activeImageMiniatura.localFile.childImageSharp.fluid} /> 
            </div> 
            <div>
                {images.map(image => {
                    return(
                        <ImageMiniatura 
                            key={image.id} 
                            isActive={activeImageMiniatura.id === image.id}
                            onClick={handleClick}
                            image={image}
                            />
                    );
                })}
            </div>
        </ImageGalleryWrapper>
    );
}
