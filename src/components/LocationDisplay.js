import { useState } from 'react'
import styled from 'styled-components'
import LocationInput from './LocationInput';
import { LocationIcon, LoadingIcon } from './Icons'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

function LocationDisplay({locationString, usingUserLocation, loading, getUserLocation}) { 
    const [locationInputActive, setLocationInputActive] = useState(false)

    return (
        <LocationContainer>
            <LocationIconContainer 
                onClick={!loading && !usingUserLocation ? () => getUserLocation() : ()=>{}}
                loadingStatus={loading} 
                usingUserLocation={usingUserLocation}
            >
                {loading ? <LoadingIcon/> : (<LocationIcon active={usingUserLocation}/>)}
            </LocationIconContainer>
            <TextInputContainer>
                <SwitchTransition>
                {locationInputActive ? (
                    <CSSTransition
                        classNames="slideRight"
                        timeout={400}
                        key="input"
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                    >
                        <LocationInput hideInput={()=>setLocationInputActive(false)}/>
                    </CSSTransition>
                ) : (
                    <CSSTransition
                        classNames="fade"
                        timeout={400}
                        key="text"
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                    >
                        <Location onClick={()=>setLocationInputActive(true)}>{locationString}</Location>
                    </CSSTransition>
                )}
                </SwitchTransition>
            </TextInputContainer>
        </LocationContainer>
    )
    
}

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
  cursor: pointer;
`

const TextInputContainer = styled.div`
    position: relative;
`

export default LocationDisplay