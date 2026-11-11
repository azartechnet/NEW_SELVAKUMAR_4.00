
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Carousel() {
    return (
        <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
        >

            {/* Indicators */}
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="0"
                    className="active"
                ></button>

                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="1"
                ></button>

                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="2"
                ></button>
            </div>

            {/* Carousel Images */}
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img
                        src="https://picsum.photos/id/1015/1200/500"
                        className="d-block w-100"
                        alt="Mountain"
                    />

                    <div className="carousel-caption">
                        <h2>Welcome to React</h2>
                        <p>Learn ReactJS Development</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img
                        src="https://picsum.photos/id/1018/1200/500"
                        className="d-block w-100"
                        alt="Nature"
                    />

                    <div className="carousel-caption">
                        <h2>Learn Programming</h2>
                        <p>Build Modern Web Applications</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img
                        src="https://picsum.photos/id/1019/1200/500"
                        className="d-block w-100"
                        alt="Forest"
                    />

                    <div className="carousel-caption">
                        <h2>Become a Developer</h2>
                        <p>Start Your Coding Journey</p>
                    </div>
                </div>

            </div>

            {/* Previous Button */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
            </button>

            {/* Next Button */}
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
            </button>

        </div>
    );
}

export default Carousel;
