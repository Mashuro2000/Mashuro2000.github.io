import React, { useState } from "react";

export const ImageCollage = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className="carousel-image-container">
                    <img 
                        src={images[currentIndex]} 
                        alt={`Project image ${currentIndex + 1}`} 
                        className="carousel-image"
                    />
                </div>
                {images.length > 1 && (
                    <>
                        <button className="carousel-button left" onClick={goToPrevious}>
                            ❮
                        </button>
                        <button className="carousel-button right" onClick={goToNext}>
                            ❯
                        </button>
                        <div className="carousel-dots">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ImageCollage;