import React from 'react'
import Image from "gatsby-image";
import {ImageMiniaturaWrapper} from "./styles";

export default function ImageMiniatura({isActive, onClick,image}) {
    const handleClick = () => {
        onClick(image);
    };

    return (
        <ImageMiniaturaWrapper onClick= {handleClick} isActive={isActive} >
             <Image fluid={image.localFile.childImageSharp.fluid} />
        </ImageMiniaturaWrapper>
    );
}
