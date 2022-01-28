import { useState, useEffect } from 'react';
import styled from 'styled-components'
import WeatherDisplay from './components/WeatherDisplay';
import { format } from 'date-fns'

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState({})
  const [fiveDayForecastData, setFiveDayForecastData] = useState({})
  const [isFarenheit, setIsFarenheit] = useState(true)
  const dateString = format(new Date(), 'EEEE, MMM d, yyyy')
    
  useEffect(()=>{
      const fetchWeatherData = () => {
          fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/dallas?unitGroup=us&include=current%2Cdays&key=UNZGJCFYMMV3C7S9VMS98K2E9&contentType=json')
          .then(resp => resp.json())
          .then(json => {
              setCurrentWeatherData(json.currentConditions)
              setFiveDayForecastData(json.days.slice(0, 5))
          })
      }
      fetchWeatherData()
  }, [])

  return (
    <AppContainer className="App">
      <Location>Dallas, TX</Location>
      <DateText>{dateString}</DateText>
      <WeatherDisplay
        currentWeatherData={currentWeatherData}
        fiveDayForecastData={fiveDayForecastData}
        isFarenheit={isFarenheit}
        setIsFarenheit={(status)=>setIsFarenheit(status)}
      />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(46deg, #115DA3 0%, #4ECFED 100%);
`

const Location = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`

const DateText = styled.div`
  color: #fff;
  font-size: 15px;
`

export default App;
