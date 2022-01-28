import styled from 'styled-components'
import { getConditionIcon } from '../helpers'
import { PartlyCloudIcon } from './Icons'

function CurrentWeather (props) {
    const { temperature, conditions, windSpeed, icon } = props
    const conditionIcon = getConditionIcon(icon)

    return (
        <Container>
            <Temperature>{temperature}&#176;</Temperature>
            {conditionIcon}
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
`

const Temperature = styled.p`
    font-size: 48px;
    color: #65AED5;
    text-align: center;
    margin: 0;
    font-weight: 500;
    line-height: 1;
`

const WeatherDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;

    p {
        font-size: 14px;
        color: #65AED5;
        margin: 0;
    }
`

export default CurrentWeather