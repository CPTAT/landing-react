import React from 'react'
import Icon1 from '../../images/MD.png';
import Icon2 from '../../images/ST.png';
import Icon3 from '../../images/TS.png';
import Icon4 from '../../images/HV.png';
import Icon5 from '../../images/AZ.png';

import { TeamContainer, TeamH1, TeamWrapper, TeamIcon, TeamH2, TeamP, TeamCard} from './TeamElements'

const TeamSection = () => {
    return (
        <TeamContainer id="team">
           <TeamH1>НАША КОМАНДА</TeamH1>
           <TeamWrapper>
                <TeamCard>  
                    <TeamIcon src={Icon1}/>
                    <TeamH2>Данилов Михайло</TeamH2> 
                    <TeamP>СЕО</TeamP>
                </TeamCard>  
                <TeamCard>  
                    <TeamIcon src={Icon2}/>
                    <TeamH2>Титов Сергій</TeamH2> 
                    <TeamP>СТО</TeamP>
                </TeamCard>
                <TeamCard>  
                    <TeamIcon src={Icon3}/>
                    <TeamH2>Ткаченко Світлана</TeamH2> 
                    <TeamP>САІО</TeamP>
                </TeamCard>
                <TeamCard>  
                    <TeamIcon src={Icon4}/>
                    <TeamH2>Годлевський В'ячеслав</TeamH2> 
                    <TeamP>СІО</TeamP>
                </TeamCard>
                <TeamCard>  
                    <TeamIcon src={Icon5}/>
                    <TeamH2>Заровська Анна</TeamH2> 
                    <TeamP>ССО</TeamP>
                </TeamCard>
            </TeamWrapper> 
        </TeamContainer>
    )
}

export default TeamSection
