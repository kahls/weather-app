import styled from 'styled-components'
import ForecastTile from './ForecastTile'
import { formatDay } from '../helpers'
import React from 'react'

function FiveDayForecast (props) {
    return (
        <Container>
            {props.data && props.data.length > 0 && (
                <React.Fragment>
                    {props.data.map((day,index) => 
                        <ForecastTile
                            key={index}
                            day={formatDay(new Date(day.datetime).getUTCDay())}
                            condition={day.icon}
                            temperature={Math.floor(day.temp)}
                        />
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
`

export default FiveDayForecast