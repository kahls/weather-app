import { PartlyCloudIcon, CloudyDrizzle, CloudySunny, CloudLightning, CloudyDrizzleSun } from './components/Icons'

export const getConditionIcon = (conditionStatus) => {
    switch(conditionStatus) {
        case 'snow':
            return <CloudyDrizzle/>
        case 'rain':
            return <CloudyDrizzle/>
        case 'fog':
            return <PartlyCloudIcon/>
        case 'wind':
            return <PartlyCloudIcon/>
        case 'cloudy':
            return <PartlyCloudIcon/>
        case 'partly-cloudy-day':
            return <PartlyCloudIcon/>
        case 'partly-cloudy-night':
            return <PartlyCloudIcon/>
        case 'clear-day':
            return <CloudySunny/>
        case 'clear-night':
            return <CloudySunny/>
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