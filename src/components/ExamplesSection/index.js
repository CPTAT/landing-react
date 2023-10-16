import React, {useState} from 'react'
import { ExampleContainer, ExampleWrapper, ExamplesH1 } from './ExamplesElements'
import { SliderData } from './ExamplesData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Example = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <=0) {
        return null;
    };




    return (
        <ExampleContainer Container id="examples">
            <ExamplesH1>ПРИКЛАДИ ВИКОРИСТАННЯ</ExamplesH1>
            <ExampleWrapper>
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <section className="slider">
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <video
                                    src={slide.video}
                                    alt="video examples"
                                    className="video-slider"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    webkit-playsinline="true"
                                />
                            )}
                        </div>
                    );
                })}

                </section>
                <FaArrowAltCircleRight className="right-arrow"  onClick={nextSlide} />
            </ExampleWrapper>
        </ExampleContainer>
    );
};
export default Example;
