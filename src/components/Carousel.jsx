import React, { useState, useEffect } from 'react'
import './Card.css'
import './carousel.css'
import carouselimg1 from '../images/Carousel-001.png'
import carouselimg2 from '../images/Carousel-008.jpg'
import carouselimg3 from '../images/Carousel-010.jpg'
import carouselimg4 from '../images/Carousel-012.jpg'




export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
        )
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
        )
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="card">
            <div className="container2">
                <div className="carousel">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                            style={{
                                display:
                                    index === currentSlide ? 'block' : 'none',
                            }}
                        >
                            <img
                                src={slide}
                                className="carousel-image"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                    <div className="carousel-controls">
                        <button onClick={prevSlide} className="butt">
                            ❮
                        </button>
                        <button onClick={nextSlide} className="butt">
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const slides = [
  carouselimg1,
  carouselimg2,
  carouselimg3,
  carouselimg4,
]

export default Carousel
