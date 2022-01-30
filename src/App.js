import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import WeatherDisplay from './components/WeatherDisplay';
import { format } from 'date-fns'
import { LocationIcon, LoadingIcon } from './components/Icons'
import { CSSTransition } from 'react-transition-group'

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState({})
  const [fiveDayForecastData, setFiveDayForecastData] = useState({})
  const [usingUserLocation, setUsingUserLocation] = useState(false)
  const [locationString, setLocationString] = useState('Dallas, TX')
  const [isFarenheit, setIsFarenheit] = useState(true)
  const [loading, setLoading] = useState(false)
  const dateString = format(new Date(), 'EEEE, MMM d, yyyy')

  const fetchWeatherData = (location) => {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current%2Cdays&key=UNZGJCFYMMV3C7S9VMS98K2E9&contentType=json`)
    .then(resp => resp.json())
    .then(json => {
        setCurrentWeatherData(json.currentConditions)
        setFiveDayForecastData(json.days.slice(0, 5))
    })
  }

  const fetchLocationName = (location) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location}&sensor=true&key=AIzaSyBSEbeJG1Cf29i8fBVfBBdzVvnNUlE-6Q8`)
    .then(resp => resp.json())
    .then(json => setLocationString(json.plus_code.compound_code.split(' ').slice(1,3).join(' ').split(',').slice(0,2).join(',')))
    .catch(err => console.log(err))
  }

  const getUserLocation = () => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(async position=>{
      const positionString = `${position.coords.latitude},${position.coords.longitude}`
      Promise.all([fetchLocationName(positionString), fetchWeatherData(positionString)])
      .then(()=>setUsingUserLocation(true))
      .finally(()=>setLoading(false))
    })
  }

  useEffect(()=>{
    fetchWeatherData('dallas')
  }, [])

  return (
    <AppContainer className="App">
      <CSSTransition
        classNames="slideDown"
        timeout={1000}
        appear={true}
        in={true}
      >
      <ContentContainer>
        <LocationContainer>
          <LocationIconContainer 
            onClick={!loading && !usingUserLocation ? () => getUserLocation() : ()=>{}}
            loadingStatus={loading} 
            usingUserLocation={usingUserLocation}
          >
            {loading ? <LoadingIcon/> : (<LocationIcon active={usingUserLocation}/>)}
          </LocationIconContainer>
          <Location>{locationString}</Location>
        </LocationContainer>
        <DateText>{dateString}</DateText>
          <WeatherDisplay
            currentWeatherData={currentWeatherData}
            fiveDayForecastData={fiveDayForecastData}
            isFarenheit={isFarenheit}
            setIsFarenheit={(status)=>setIsFarenheit(status)}
          />
        </ContentContainer>
      </CSSTransition>
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

  @media(max-width: 480px) {
    justify-content: flex-start;
    padding: 20px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LocationIconContainer = styled.span`
  cursor: ${props => !props.loadingStatus && !props.usingUserLocation ? 'pointer' : 'initial'};
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Location = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  margin-left: 8px;
`

const DateText = styled.div`
  color: #fff;
  font-size: 15px;
`

export default App;
