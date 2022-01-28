import styled from 'styled-components'
import { getConditionIcon, convertFtoC } from '../helpers'

function ForecastTile (props) {
    const { day, temperature, condition, isFarenheit } = props
    const conditionIcon = getConditionIcon(condition)
    const temperatureRender = isFarenheit ? temperature : convertFtoC(temperature)

    return (
        <Container>
            <Day>{day}</Day>
            {conditionIcon}
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
    }
`

const Day = styled.p`
    font-size: 14px;
    color: #4A4A4A;
    text-align: center;
    margin: 0;
`

const Temperature = styled.p`
    font-size: 24px;
    color: #4A4A4A;
    text-align: center;
    margin: 0;
`

export default ForecastTile