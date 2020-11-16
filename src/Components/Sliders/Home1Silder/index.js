import React from 'react';
import './style.css';
import { Carousel } from 'react-bootstrap';
import bg1 from '../../../Resources/Bgs/bg1.jpg';
import bg2 from '../../../Resources/Bgs/bg2.jpg';
import bg3 from '../../../Resources/Bgs/bg3.jpg';
import bg4 from '../../../Resources/Bgs/bg4.jpg';
import bg5 from '../../../Resources/Bgs/bg5.jpg';

import bg11 from '../../../Resources/Bgs/bg1.svg';
import bg22 from '../../../Resources/Bgs/bg2.svg';
import bg33 from '../../../Resources/Bgs/bg3.svg';
import bg44 from '../../../Resources/Bgs/bg4.svg';
import bg55 from '../../../Resources/Bgs/bg5.svg';


/**
* @author
* @function Home1Slider
**/

const Home1Slider = (props) => {

    return (
        <div className="home-slider">
            <div className="slide-image-div-w">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg1}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg2}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg3}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg4}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg5}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>


            <div className="slide-image-div-s">
                <Carousel className="c-s">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg11}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg22}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg33}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg44}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg55}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )

}

export default Home1Slider