import styled from 'styled-components'
import ForecastTile from './ForecastTile'

function FiveDayForecast () {
    return (
        <Container>
            <ForecastTile/>
            <ForecastTile/>
            <ForecastTile/>
            <ForecastTile/>
            <ForecastTile/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #fff;
    border-radius: 0 0 3px 3px;
    height: 142px;
`

export default FiveDayForecast