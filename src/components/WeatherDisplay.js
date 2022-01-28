import styled from 'styled-components'
import DallasImg from '../images/Dallas.png'
import FiveDayForecast from './FiveDayForecast'
import CurrentWeather from './CurrentWeather'
import TempScaleToggle from './TempScaleToggle'


function WeatherDisplay () {
    return (
        <Container>
            <img src={DallasImg}/>
            <TopContainer>
                <CurrentWeather/>
                <TempScaleToggle/>
            </TopContainer>
            <FiveDayForecast/>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 670px;
    box-sizing: border-box;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.20);
    margin-top: 15px;

    img {
        width: 100%;
        border-radius: 3px 3px 0 0;
    }
`

const TopContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 25px 20px;
    box-sizing: border-box;
`

export default WeatherDisplay