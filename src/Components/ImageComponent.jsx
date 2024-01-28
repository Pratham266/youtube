import React, { useEffect, useState } from 'react'
import lazyImg from '/Images/lazyImage.jpeg'
const ImageComponent = ({src,alt,style,className}) => {
    const [imgsrc,setImgSrc] = useState( lazyImg|| src)

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImgSrc(src);
        };
      }, [src]);

  return (
    <img
    style={style}
    className={className}
    src={imgsrc}
    alt={alt}
  />
  )
}

export default ImageComponent
