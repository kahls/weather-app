import styled from 'styled-components'
import { getConditionIcon } from '../helpers'
import { convertFtoC } from '../helpers'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function CurrentWeather (props) {
    const { temperature, conditions, windSpeed, icon, isFarenheit } = props
    const conditionIcon = getConditionIcon(icon)

    const temperatureRender = isFarenheit ? temperature : convertFtoC(temperature)

    return (
        <SwitchTransition>
            <CSSTransition
                key={windSpeed}
                classNames="slideRight"
                timeout={400}
                addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                }}
            >
                <Container>
                    <SwitchTransition>  
                        <CSSTransition
                            key={temperatureRender}
                            classNames="fade"
                            timeout={200}
                            addEndListener={(node, done) => {
                                node.addEventListener("transitionend", done, false);
                            }}
                        >
                            <Temperature>{temperatureRender}<span className="tempDegree">&#176;</span></Temperature>
                        </CSSTransition>
                    </SwitchTransition>
                    <IconContainer>{conditionIcon}</IconContainer>
                    <WeatherDescription>
                        <p>{conditions}</p>
                        <p>{windSpeed} mph</p>
                    </WeatherDescription>
                </Container>
            </CSSTransition>
        </SwitchTransition>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;

    @media(max-width: 480px) {
        height: 41px;
    }

    .tempDegree {
        font-size: 70%;
        position: relative;
        display: inline-block;
        transform: translateY(-8%);
    }
`

const Temperature = styled.p`
    font-size: 48px;
    color: #65AED5;
    text-align: center;
    margin: 0;
    font-weight: 500;
    line-height: 1;
    min-width: 85px;
    align-self: flex-start;

    @media(max-width: 480px) {
        font-size: 40px;
        min-width: 70px;
    }
`
const IconContainer = styled.div`
    margin-right: 10px;
    align-self: flex-end;
    display: flex;

    @media(max-width: 480px) {
        width: 35px;
        margin-right: 7px;

        svg {
            width: 100%;
            height: auto;
            margin-bottom: 1px;
        }
    }
`

const WeatherDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;

    // @media(max-width: 480px) {
    //     align-self: center;
    // }

    p {
        font-size: 14px;
        color: #65AED5;
        margin: 0;
        font-weight: 600;

        @media(max-width: 480px) {
            font-weight: bold;
            font-size: 12px;
        }
    }
`

export default CurrentWeather