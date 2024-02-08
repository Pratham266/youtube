import React, { useEffect, useState } from "react";
import lazyImg from "/Images/lazyImage.jpeg";

const ImageComponent = ({ src, alt, className }) => {
  const [imgsrc, setImgSrc] = useState(lazyImg || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [imgsrc]);

  return <img className={className} src={imgsrc} alt={alt} />;
};

export default ImageComponent;
