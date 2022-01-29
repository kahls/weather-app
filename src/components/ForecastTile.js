import styled from 'styled-components'
import { getConditionIcon, convertFtoC } from '../helpers'

function ForecastTile (props) {
    const { day, temperature, condition, isFarenheit } = props
    const conditionIcon = getConditionIcon(condition)
    const temperatureRender = isFarenheit ? temperature : convertFtoC(temperature)

    return (
        <Container>
            <Day>{day}</Day>
            <IconContainer>{conditionIcon}</IconContainer>
            <Temperature>{temperatureRender}&#176;</Temperature>
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

    &:last-child {
        &:after {
            display: none;
        }
    }

    @media(max-width: 480px) {
        flex-direction: row;
        height: auto;
        width: 100%;
        padding: 15px 20px;
    }
`

const Day = styled.p`
    font-size: 14px;
    color: #4A4A4A;
    text-align: center;
    margin: 0;

    @media(max-width: 480px) {
        font-size: 20px;
        width: 45px;
        text-align: left;
        order: 1;
    }
`

const Temperature = styled.p`
    font-size: 24px;
    color: #4A4A4A;
    text-align: center;
    margin: 0;

    @media(max-width: 480px) {
        width: 50px;
        order: 2;
        font-size: 35px;
        text-align: left;
    }
`

const IconContainer = styled.div`
    @media(max-width: 480px) {
        order: 3;
        width: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default ForecastTile