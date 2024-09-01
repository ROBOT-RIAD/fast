import React, { useState, useEffect } from 'react';

const Galary = () => {
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        const loadGallery = async () => {
            try {
                const response = await fetch("https://fast-food-nzvp.onrender.com/Gallery/all/");
                const data = await response.json();
                setGalleryImages(data);
            } catch (err) {
                console.log(err);
            }
        };
        loadGallery();
    }, []);

    return (
        <div className='container mb-3'>
            <h1 className='suse-cu-light' style={{textAlign:"center"}}>Our Gallery</h1>
            <div className="swiffy-slider slider-item-reveal slider-nav-round slider-item-ratio slider-item-ratio-21x9" id="slider1">
                <ul className="slider-container">
                    {galleryImages.map((image, index) => (
                        <li key={index}>
                            <img src={image.image} loading="lazy" alt="" />
                        </li>
                    ))}
                </ul>

                <button type="button" className="slider-nav" aria-label="Go left"></button>
                <button type="button" className="slider-nav slider-nav-next" aria-label="Go right"></button>

                <div className="slider-indicators slider-indicators-square d-none d-md-flex">
                    {galleryImages.map((_, index) => (
                        <button
                            key={index}
                            className={index === 0 ? "active" : ""}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                <div className="slider-indicators slider-indicators-sm slider-indicators-dark slider-indicators-round d-md-none slider-indicators-highlight">
                    {galleryImages.map((_, index) => (
                        <button
                            key={index}
                            className={index === 0 ? "active" : ""}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Galary;
