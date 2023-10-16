import React from 'react';
import Icon1 from '../../images/opp-1.svg';
import Icon2 from '../../images/opp-2.svg';
import Icon3 from '../../images/opp-3.svg';
import Icon4 from '../../images/opp-4.svg';
import {OpportunitiesContainer, OpportunitiesH1, OpportunitiesWrapper, OpportunitiesCard, OpportunitiesIcon, OpportunitiesH2, OpportunitiesP} from './OpportunitiesElements';

const Opportunities = () => {
    return (
        <OpportunitiesContainer id="opportunities">
           <OpportunitiesH1>Можливості CPTAT</OpportunitiesH1>
           <OpportunitiesWrapper>
                <OpportunitiesCard>
                    <OpportunitiesIcon src={Icon1}/>
                    <OpportunitiesH2>Точно визначає трафік у певній локації</OpportunitiesH2> 
                    <OpportunitiesP>Кожен перехожий є потенційним клієнтом, тому важливо перевірити трафік до вибору приміщення</OpportunitiesP>
                </OpportunitiesCard> 
                <OpportunitiesCard>
                    <OpportunitiesIcon src={Icon2}/>
                    <OpportunitiesH2> Полегшує пошук приміщення для ведення бізнесу</OpportunitiesH2> 
                    <OpportunitiesP> Підбір Кількох найоптимальніших локацій персонально для вашого бізнесу</OpportunitiesP>
                </OpportunitiesCard> 
                <OpportunitiesCard>
                    <OpportunitiesIcon src={Icon3}/>
                    <OpportunitiesH2>Надає економічну аналітику місця у формі звіту</OpportunitiesH2> 
                    <OpportunitiesP> Тижневі та добові піки перехожих, конкурентні заклади поблизу, прогнози щодо кількості відвідувачів та виручки</OpportunitiesP>
                </OpportunitiesCard>
                <OpportunitiesCard>
                    <OpportunitiesIcon src={Icon4}/>
                    <OpportunitiesH2>Збільшує привабливість нерухомості</OpportunitiesH2> 
                    <OpportunitiesP>Ринкова вартість комерційної нерухомості зростає, за рахунок підтвердженної аналітики трафіку</OpportunitiesP>
                </OpportunitiesCard>   
            </OpportunitiesWrapper> 
        </OpportunitiesContainer>
    )
}

export default Opportunities
