import React from 'react';
import { Container } from 'react-bootstrap';
import './Video.css'

const Video = () => {

    return (
        <Container>
            <section>
                <div class="container text-center my-5">
                    <h1 class=" fw-bold text-center">Up Coming <span>Furniture</span></h1>
                    <h4><span>Watch Now</span></h4>
                    <div class="container p-4">
                        <div class="row gx-5">
                            <div class="col-lg-6 p-3">
                                <div class="videoWrapper">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Kx0C6eiZwOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="col-lg-6 p-3">
                                <div class="videoWrapper">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Kx0C6eiZwOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Container>
    );
};

export default Video;