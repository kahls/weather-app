import styled from 'styled-components'
import ForecastTile from './ForecastTile'
import { formatDay } from '../helpers'
import React from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function FiveDayForecast (props) {
    const { data, isFarenheit } = props

    return (
        <Container>
            {data && data.length > 0 && (
                <React.Fragment>
                    {data.map((day,index) => 
                        <SwitchTransition>
                            <CSSTransition
                                key={day.temp}
                                classNames="quickSlideDown"
                                timeout={400}
                                addEndListener={(node, done) => {
                                    node.addEventListener("transitionend", done, false);
                                }}
                            >
                                <ForecastTile
                                    key={index}
                                    day={formatDay(new Date(day.datetime).getUTCDay())}
                                    condition={day.icon}
                                    temperature={Math.floor(day.temp)}
                                    isFarenheit={isFarenheit}
                                />
                            </CSSTransition>
                        </SwitchTransition>
                    )}
                </React.Fragment>
            )}
            
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

    @media(max-width: 480px) {
        flex-direction: column;
        height: auto;
    }
`

export default FiveDayForecast