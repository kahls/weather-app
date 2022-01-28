import styled from 'styled-components'
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <AppContainer className="App">
      <Location>Dallas, TX</Location>
      <Date>Saturday, Sep 16, 2018</Date>
      <WeatherDisplay/>
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

const Date = styled.div`
  color: #fff;
  font-size: 15px;
`

export default App;
