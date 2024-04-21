import React from 'react'
import { InputCard } from '../../components/InputCard'
import './Home.css'
import bull from '../../components/bull.png'
import { Carousel } from '../../components/Carousel'

export const Home = () => {
    return (
        <div
            className="main-container"
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="container">
                <div className="nav">
                    <h1
                        style={{
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                        }}
                    >
                        TL TECHNOLEGIES PVT LTD
                    </h1>
                    <img src={bull} className="icon" />
                </div>
                <div className="content-container">
                    <div className="carousal-container">
                        <Carousel />
                    </div>
                    <div className="carousal-container">
                        <InputCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
