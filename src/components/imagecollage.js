import React from "react";

export const ImageCollage = ({ images }) => {
    return (
        <div className="image-collage">
            {images.map((image, index) => (
                <div key={index} className="collage-cell">
                    <img src={image} alt={`Collage image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default ImageCollage