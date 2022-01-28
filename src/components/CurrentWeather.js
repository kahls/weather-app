import styled from 'styled-components'
import { PartlyCloudIcon } from './Icons'

function CurrentWeather (props) {
    return (
        <Container>
            <Temperature>93&#176;</Temperature>
            <PartlyCloudIcon/>
            <WeatherDescription>
                <p>Partly Cloudy</p>
                <p>12 mph</p>
            </WeatherDescription>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 225px;
`

const Temperature = styled.p`
    font-size: 48px;
    color: #65AED5;
    text-align: center;
    margin: 0;
    margin-top: -15px;
    font-weight: 500;
`

const WeatherDescription = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-size: 14px;
        color: #65AED5;
        margin: 0;
    }
`

export default CurrentWeather