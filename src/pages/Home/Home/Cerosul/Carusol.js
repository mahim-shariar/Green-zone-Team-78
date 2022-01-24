import React from "react";
import { Carousel } from "react-bootstrap";
import './Carusol.css'

/* ths is the carousel, which is used in home component  */
const Slider = () => {
    return (
        <div className="container rounded shadow-lg p-4 slider-edit margin-top ">
            <div className="row g-2">
                <div className="col-lg-6 col-sm-12 ">
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
                <div className="col-lg-6 col-sm-12">
                    <img style={{ width: '46%' }} src="https://i.ibb.co/8xQhpK6/7889330123150814d3e25a9dfd47b9f7-removebg-preview-1.png" alt="" />
                    <h1 className="text-dark mb-2" > Our Collections </h1>
                    <h5 class="text-dark fw-thin">We grooming eco friendly product to you</h5>
                </div>
            </div>
        </div>
    );
};

export default Slider;