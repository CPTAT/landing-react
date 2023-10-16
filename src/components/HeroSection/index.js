import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }



    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    CPTAT
                </HeroH1>
                <HeroP>
                    правильно обрана <br></br>локація - 70% успіху
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/signin" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true">
                        ВХІД У КАБІНЕТ {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
