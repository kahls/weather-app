import styled from 'styled-components'

function LocationInput(props) {
    return (
        <Container>
            <Input type="text" placeholder="Search City or Zip Code"/>
            <CloseButton onClick={props.hideInput}>&#215;</CloseButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 200px;
    padding: 5px 15px;
    background: #ffffff40;
    border-radius: 15px;
    box-sizing: border-box;
    position: relative;
`

const CloseButton = styled.span`
    font-size: 20px;
    color: #fff;
    line-height: 1;
    cursor: pointer;
    position: absolute;
    right: 10px;
`

const Input = styled.input`
    background-color: transparent;
    outline: 0;
    border: none;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    padding-right: 20px;

    &::placeholder {
        color: #fff;
        text-align: left;
    }
`

export default LocationInput