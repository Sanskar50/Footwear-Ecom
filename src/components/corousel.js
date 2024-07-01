// src/Carousel.js
import React, { useEffect, useState } from 'react';

const Carousel = () => {
    const images = ['cruise-black.png', 'light-trainers.png', 'reimagined-icons.png'];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel-button prev">❮</button>
            <div className="carousel-images">
                {images.map((image, index) => (
                    // console.log(image + index),
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        className="active"
                    />
                ))}
            </div>
            <button onClick={nextSlide} className="carousel-button next">❯</button>
        </div>
    );
};

export default Carousel;
