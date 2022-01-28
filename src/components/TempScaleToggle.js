import styled from 'styled-components'

function TempScaleToggle (props) {
    const { isFarenheit, setIsFarenheit } = props

    return (
        <Container>
            <Checkbox 
                onChange={(e)=>setIsFarenheit(e.target.checked)} 
                checked={isFarenheit}
            />
            <Slider>
                <OptionContainer>
                    <CelciusOption>C&#176;</CelciusOption>
                    <FarenheitOption>F&#176;</FarenheitOption>
                </OptionContainer>
            </Slider>
        </Container>
    )
}

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
`

const Checkbox = styled.input.attrs({type: 'checkbox'})`
    display: none;
`

const Option = styled.span`
    font-size: 14px;
    color: #fff;
    transition: color .4s;
`

const CelciusOption = styled(Option)``
const FarenheitOption = styled(Option)``

const Slider = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .4s;
    cursor: pointer;
    background-color: #2685BD;
    border-radius: 34px;

    ${Checkbox}:focus + & {
        box-shadow: 0 0 1px #3B97D3;
    }

    ${Checkbox}:checked + & {
        ${FarenheitOption} {
            color: #2685BD;
        }
    }

    ${Checkbox}:not(:checked) + & {
        ${CelciusOption} {
            color: #2685BD;
        }
    }

    &:before {
        position: absolute;
        content: "";
        left: 3px;
        top: 50%;
        transform: translateY(-50%);
    
        transition: .4s;

        height: 21px;
        width: 21px;
        background-color: #fff;
        border-radius: 50%;

        ${Checkbox}:checked + & {
            transform: translateX(23px) translateY(-50%);
        }
    }
`

const OptionContainer = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5px;
    box-sizing: border-box;
`

export default TempScaleToggle