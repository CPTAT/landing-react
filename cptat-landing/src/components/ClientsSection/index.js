import React from 'react';
import { Button } from '../ButtonElement';
import Icon1 from '../../images/client-svg-1.svg';
import Icon2 from '../../images/client-svg-2.svg';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, ClientIcon, Heading, Subtitle, BtnWrap, ClientH1} from './ClientsElements';

const InfoSection = ({lightBg, imgStart, lightText,darkText,buttonLabel, primary, dark, dark2}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id="clients">
        <ClientH1>CPTAT буде корисний</ClientH1>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                        <ClientIcon src={Icon1}/>
                            <Heading lightText={lightText}>
                            Власнику бізнесу
                            </Heading>
                            <Subtitle darkText={darkText}>
                            Шукаєте місце для майбутнього бізнесу або ж хочете проаналізувати існуючий? 
                            CPTAT допоможе підібрати найкращу локацію

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
                    <TextWrapper>
                        <ClientIcon src={Icon2}/>
                            <Heading lightText={lightText}>
                                Власнику нерухомості
                            </Heading>
                            <Subtitle darkText={darkText}>
                            Хочете вигідно здати свою нерухомість в аренду? CPTAT допоможе обґрунтувати ціну, спираючись на показники трафіку
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
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    );
};

export default InfoSection;
