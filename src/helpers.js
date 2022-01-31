import { WiDaySnow, WiDayRain, WiFog, WiWindy, WiCloudy, WiNightAltPartlyCloudy, WiDayCloudy, WiDaySunny, WiNightClear} from "react-icons/wi";

export const getConditionIcon = (conditionStatus) => {
    switch(conditionStatus) {
        case 'snow':
            return <WiDaySnow color="#65aed5" size="45"/>
        case 'rain':
            return <WiDayRain color="#65aed5" size="45"/>
        case 'fog':
            return <WiFog color="#65aed5" size="45"/>
        case 'wind':
            return <WiWindy color="#65aed5" size="45"/>
        case 'cloudy':
            return <WiCloudy color="#65aed5" size="45"/>
        case 'partly-cloudy-day':
            return <WiDayCloudy color="#65aed5" size="45"/>
        case 'partly-cloudy-night':
            return <WiNightAltPartlyCloudy color="#65aed5" size="45"/>
        case 'clear-day':
            return <WiDaySunny color="#65aed5" size="45"/>
        case 'clear-night':
            return <WiNightClear color="#65aed5" size="45"/>
        default:
            break;
    }   
}


export const formatDay = (index, fullDay) => {
    switch (index) {
        case 0:
            return fullDay ? 'Sunday' : 'Sun'
        case 1:
            return fullDay ? 'Monday': 'Mon'
        case 2:
            return fullDay ? 'Tuesday': 'Tues'
        case 3:
            return fullDay ? 'Wednsday' : 'Wed'
        case 4:
            return fullDay ? 'Thursday' : 'Thur'
        case 5:
            return fullDay ? 'Friday' : 'Fri'
        case 6:
            return fullDay ? 'Saturday' : 'Sat'
        default:
            break
    }
}

export const convertFtoC = (fDegree) => {
    return Math.floor((fDegree - 32) * (5/9))
}

export const formatLocation = (locationString) => {
    const arr = locationString.split(',')
    const cityName = arr[0]
    const stateZip = arr[1]
    const state = stateZip.split(' ').slice(1, 2).join('')
    return `${cityName}, ${state}`
}