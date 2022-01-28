import { useEffect, useState } from 'react'
import styled from 'styled-components'
import DallasImg from '../images/Dallas.png'
import FiveDayForecast from './FiveDayForecast'
import CurrentWeather from './CurrentWeather'
import TempScaleToggle from './TempScaleToggle'
import Cloud1Image from '../images/Cloud1.png'
import Cloud2Image from '../images/Cloud2.png'


function WeatherDisplay (props) {
    const { fiveDayForecastData, currentWeatherData } = props

    return (
        <Container>
            <Cloud className="cloud-1" src={Cloud1Image}/>
            <Cloud className="cloud-2" src={Cloud2Image}/>
            <img src={DallasImg}/>
            <TopContainer>
                <CurrentWeather 
                    temperature={Math.floor(currentWeatherData.temp)}
                    conditions={currentWeatherData.conditions}
                    windSpeed={Math.floor(currentWeatherData.windspeed)}
                    icon={currentWeatherData.icon}
                />
                <TempScaleToggle/>
            </TopContainer>
            <FiveDayForecast data={fiveDayForecastData}/>
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

const Cloud = styled.img`
    position: absolute;
    height: auto;

    &.cloud-1 {
        right: -80px;
        top: 25%;
        transform: translateY(-50%);
        width: 213px;
    }

    &.cloud-2 {
        left: -100px;
        top: 37%;
        transform: translateY(-50%);
        width: 146px;
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