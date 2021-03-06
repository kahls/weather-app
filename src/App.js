import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import WeatherDisplay from './components/WeatherDisplay';
import { format } from 'date-fns'
import { CSSTransition } from 'react-transition-group'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Location from './components/LocationDisplay';
import { formatLocation } from './helpers'

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState({})
  const [fiveDayForecastData, setFiveDayForecastData] = useState({})
  const [usingUserLocation, setUsingUserLocation] = useState(false)
  const [locationString, setLocationString] = useState('Dallas, TX')
  const [isFarenheit, setIsFarenheit] = useState(true)
  const [loading, setLoading] = useState(false)
  const [locationInputActive, setLocationInputActive] = useState(false)
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
      .finally(()=>{
        setLoading(false)
        setLocationInputActive(false)
      })
    },
    (error)=>{
      setLoading(false)
      NotificationManager.error('Cannot access location. Please enable location settings.', 'Error', 5000)
    })
  }

  const getWeatherByZip = (zipCode) => {
    setLoading(true)
    const searchZipCode = (zipCode) => {
      return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyBSEbeJG1Cf29i8fBVfBBdzVvnNUlE-6Q8`)
      .then(resp => resp.json())
      .then(json => {
        let zipResult = {}
        json.results.every(result => {
          if (result.types.includes('postal_code')) {
            zipResult = result
            return false
          }
          else return true
        })
        if (Object.keys(zipResult).length > 0) {
          const positionString = `${zipResult.geometry.location.lat}, ${zipResult.geometry.location.lng}`
          setLocationString(formatLocation(zipResult.formatted_address))
          fetchWeatherData(positionString)
        }
        else NotificationManager.error('Zip code not found', '', 4000)
        
      })
      .catch (err => console.log(err))
      .finally(()=>{
        setLoading(false)
        setLocationInputActive(false)
      })
    }

    searchZipCode(zipCode)
  }

  useEffect(()=>{
    fetchWeatherData('dallas')
  }, [])

  return (
    <AppContainer className="App">
      <NotificationContainer/>
      <CSSTransition
        classNames="slideDown"
        timeout={1000}
        appear={true}
        in={true}
      >
      <ContentContainer>
        <Location
          locationString={locationString}
          usingUserLocation={usingUserLocation}
          loading={loading}
          getUserLocation={getUserLocation}
          locationInputActive={locationInputActive}
          setLocationInputActive={setLocationInputActive}
          getWeatherByZip={getWeatherByZip}

        />
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

const DateText = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`

export default App;
