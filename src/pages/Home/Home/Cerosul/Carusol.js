import React from "react";
import { Carousel } from "react-bootstrap";
// import img from "../../footer/img.png";
// import './Slide.css';
import './Carusol.css'

/* ths is the carousel, which is used in home component  */
const Slider = () => {
    return (
        <div className="container rounded shadow p-4 slider-edit margin-top ">
            <div className="row g-2">
                <div className="col-6">
                    <div className="w-100 h-25">
                        <Carousel className="bg-transparent mx-auto">
                            <Carousel.Item interval={2000}>
                                <img
                                    className="height d-block w-md-100 mx-auto rounded "
                                    src="https://i.ibb.co/0qCSzwM/1-eh-3-2-600x400.jpg"
                                    alt=""
                                />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="height d-block w-md-100 mx-auto rounded "
                                    src="https://i.ibb.co/Fsnf5wK/Treehouse-Dream-54-990x660-600x400.jpg"
                                    alt=""
                                />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="height d-block w-md-100 mx-auto rounded "
                                    src="https://i.ibb.co/5sd18gx/wall-416060-480-2-600x400.jpg"
                                    alt=""
                                />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="col-6">
                    <h1 className="text-light my-5 mb-2" > Our Collections </h1>
                    <h5 class="text-white fw-thin">We grooming eco friendly product to you</h5>
                </div>
            </div>
        </div>
    );
};

export default Slider;