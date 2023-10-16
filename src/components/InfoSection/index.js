import React from 'react';
import { Button } from '../ButtonElement';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline,darkText,description,buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                <span>C</span>ommercial <span>P</span>roperty <span>T</span>raffic <span>A</span>nalytic <span>T</span>ool
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {description}
                            </Subtitle>
                            <BtnWrap>
                                <Button to="/SignIn" primary={primary? 1 : 0}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
};

export default InfoSection;
