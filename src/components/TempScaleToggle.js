import styled from 'styled-components'

function TempScaleToggle (props) {
    return (
        <Container>
            <Checkbox />
            <Slider />
        </Container>
    )
}

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 25px;
`

const Checkbox = styled.input.attrs({type: 'checkbox'})`
    display: none;
`

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

    &:before {
        position: absolute;
        content: "";
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
    
        transition: .4s;

        height: 21px;
        width: 21px;
        background-color: #fff;
        border-radius: 50%;

        ${Checkbox}:checked + & {
            transform: translateX(25px) translateY(-50%);
        }
    }
`

export default TempScaleToggle