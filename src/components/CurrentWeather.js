import styled from 'styled-components'
import { getConditionIcon } from '../helpers'
import { convertFtoC } from '../helpers'

function CurrentWeather (props) {
    const { temperature, conditions, windSpeed, icon, isFarenheit } = props
    const conditionIcon = getConditionIcon(icon)

    const temperatureRender = isFarenheit ? temperature : convertFtoC(temperature)

    return (
        <Container>
            <Temperature>{temperatureRender}&#176;</Temperature>
            <IconContainer>{conditionIcon}</IconContainer>
            <WeatherDescription>
                <p>{conditions}</p>
                <p>{windSpeed} mph</p>
            </WeatherDescription>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 195px;

    @media(max-width: 480px) {
        min-width: 145px;
    }
`

const Temperature = styled.p`
    font-size: 48px;
    color: #65AED5;
    text-align: center;
    margin: 0;
    font-weight: 500;
    line-height: 1;

    @media(max-width: 480px) {
        font-size: 40px;
        margin-right: 10px;
    }
`
const IconContainer = styled.div`
    @media(max-width: 480px) {
        width: 35px;
        margin-right: 7px;

        svg {
            width: 100%;
            height: auto;
        }
    }
`

const WeatherDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;

    @media(max-width: 480px) {
        align-self: center;
    }

    p {
        font-size: 14px;
        color: #65AED5;
        margin: 0;

        @media(max-width: 480px) {
            font-weight: bold;
            font-size: 12px;
        }
    }
`

export default CurrentWeather