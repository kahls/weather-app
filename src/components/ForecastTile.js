import styled from 'styled-components'
import { getConditionIcon, convertFtoC } from '../helpers'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function ForecastTile (props) {
    const { day, temperature, condition, isFarenheit } = props
    const conditionIcon = getConditionIcon(condition)
    const temperatureRender = isFarenheit ? temperature : convertFtoC(temperature)

    return (
        <Container>
            <Day>{day}</Day>
            <IconContainer>{conditionIcon}</IconContainer>
            <SwitchTransition>  
                <CSSTransition
                    key={temperatureRender}
                    classNames="fade"
                    timeout={200}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                >
                    <Temperature>
                        {temperatureRender}<span className="tempDegree">&#176;</span>
                    </Temperature>
                </CSSTransition>
            </SwitchTransition>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    position: relative;
    height: 100%;
    padding: 20px 0;
    box-sizing: border-box;

    &:after {
        content: '';
        background: #D8D8D8;
        height: 100%;
        width: 1px;
        position: absolute;
        right: 0;
        top: 0;

        @media(max-width: 480px) {
            height: 1px;
            width: 100%;
        }
    }

    @media(min-width: 480px) {
        &:last-child {
            &:after {
                display: none;
            }
        }    
    }

    @media(max-width: 480px) {
        flex-direction: row;
        height: auto;
        width: 100%;
        padding: 15px 20px;
    }

    .tempDegree {
        font-size: 80%;
        position: relative;
        display: inline-block;
        transform: translateY(5%);
    }
`

const Day = styled.p`
    font-size: 14px;
    color: #4A4A4A;
    text-align: center;
    margin: 0;
    font-weight: bold;
    margin-bottom: 10px;

    @media(max-width: 480px) {
        font-size: 16px;
        width: 45px;
        text-align: left;
        order: 1;
        margin-bottom: 0;
        font-weight: 500;
    }
`

const Temperature = styled.p`
    font-size: 24px;
    min-width: 55px;
    color: #4A4A4A;
    text-align: center;
    margin: 0;
    font-weight: 500;

    @media(max-width: 480px) {
        width: 85px;
        order: 2;
        font-size: 35px;
        font-weight: 400;
    }
`

const IconContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 480px) {
        order: 3;
        width: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default ForecastTile