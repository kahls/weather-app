import React from 'react'
import styled from 'styled-components'
import LocationInput from './LocationInput';
import { LocationIcon, LoadingIcon } from './Icons'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

function LocationDisplay({locationString, usingUserLocation, loading, getUserLocation, locationInputActive, setLocationInputActive}) { 

    const LocationIconRender = () => {
        return (
            <LocationIconContainer 
                onClick={!loading && !usingUserLocation ? () => getUserLocation() : ()=>{}}
                loadingStatus={loading} 
                usingUserLocation={usingUserLocation}
            >
                {loading ? <LoadingIcon/> : (<LocationIcon active={usingUserLocation}/>)}
            </LocationIconContainer>
        )
    }

    return (
        <React.Fragment>
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
                        <LocationContainer>
                            <LocationIconRender/>
                            <LocationInput hideInput={()=>setLocationInputActive(false)}/>
                        </LocationContainer>
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
                        <LocationContainer>
                            <LocationIconRender/>
                            <Location onClick={()=>setLocationInputActive(true)}>{locationString}</Location>
                        </LocationContainer>
                    </CSSTransition>
                )}
            </SwitchTransition>
        </React.Fragment>
    )
    
}

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
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
  margin-left: 3px;
  cursor: pointer;
  font-weight: bold;
`

export default LocationDisplay