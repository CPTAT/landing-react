import React from 'react';
import Icon1 from '../../images/algo-svg-1.svg';
import Icon2 from '../../images/algo-svg-2.svg';
import Icon3 from '../../images/algo-svg-3.svg';
import {AlgorithmContainer, AlgorithmH1, AlgorithmWrapper, AlgorithmCard, AlgorithmIcon, AlgorithmH2, AlgorithmP} from './AlgoElements';

const Algorithm = () => {
    return (
        <AlgorithmContainer id="algorithm">
           <AlgorithmH1>АЛГОРИТМ РОБОТИ</AlgorithmH1>
           <AlgorithmWrapper>
                <AlgorithmCard>
                    <AlgorithmIcon src={Icon1}/>
                    <AlgorithmH2>Камери спостереження</AlgorithmH2> 
                    <AlgorithmP>Камери працюють на основних напрямках руху потенційних клієнтів.</AlgorithmP>
                </AlgorithmCard> 
                <AlgorithmCard>
                    <AlgorithmIcon src={Icon2}/>
                    <AlgorithmH2> Штучний інтелект</AlgorithmH2> 
                    <AlgorithmP> Штучний інтелект визначає клас об’єктів, рахує їх кількість та складає математичну модель</AlgorithmP>
                </AlgorithmCard> 
                <AlgorithmCard>
                    <AlgorithmIcon src={Icon3}/>
                    <AlgorithmH2>Фінальний звіт</AlgorithmH2> 
                    <AlgorithmP> На фінальному етапі оброблені дані оформлюються у вигляді зрозумілої інфографіки</AlgorithmP>
                </AlgorithmCard>   
            </AlgorithmWrapper> 
        </AlgorithmContainer>
    )
}

export default Algorithm
