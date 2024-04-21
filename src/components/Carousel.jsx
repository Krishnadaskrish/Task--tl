import React, { useState, useEffect } from 'react'
import './Card.css'
import './carousel.css'
import con from './Carousel-001.png'
import con2 from './carousal2.jpg'

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
    con,
    con2,
    'https://metova.com/wp-content/uploads/2018/03/design_font_-1.jpeg',
    'https://thumbs.dreamstime.com/b/hands-over-keyboard-7240061.jpg',
]

export default Carousel
