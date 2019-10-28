import React, { useContext } from 'react'
import styled from "styled-components"
import uuid from "uuid/v1"
import { CalculatorContext } from '../contexts/CalculatorContext'

const InputBlock = () => {
    
    const numsArray = []
    for (let index = 9; index > -1; index--) {
        const button = createNumButton(index)
        if (index === 0) {
            numsArray.push(button)
        } else numsArray.unshift(button)

    }

    return (
        <InputsWrapper>
            <NumsButtonsWrapper>
                {numsArray}
                <Decimal />
            </NumsButtonsWrapper>
            <OperatorsWrapper>
                <NumberButton key={uuid()} type="button" name="add" value="+" >+</NumberButton>
                <NumberButton key={uuid()} type="button" name="subtract" value="-" >-</NumberButton>
                <NumberButton key={uuid()} type="button" name="multiply" value="*" >x</NumberButton>
                <NumberButton key={uuid()} type="button" name="divide" value="/" >/</NumberButton>
            </OperatorsWrapper>
        </InputsWrapper>
    )
}

export default InputBlock

export const Decimal = () => {
    return (
        <NumberButton decimal>,</NumberButton>
    )
}

export const createNumButton = (number) => {
    switch (number) {
        case 0:
            return <NumberButton double key={uuid()} type="button" name={number} value={number}>{number}</NumberButton>
        default:
            return <NumberButton key={uuid()} type="button" name={number} value={number} >{number}</NumberButton>
    }
}


export const InputsWrapper = styled.div`
display: flex;
justify-content: space-around;
border: blue 2px solid;
width: 325px;
`;

export const OperatorsWrapper = styled.div`
display: flex;
flex-direction: column;
align-self: flex-end;
`
    ;

export const NumsButtonsWrapper = styled.div`
padding: 0;
width: 240px;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
justify-content: center;
`

export const NumberButton = styled.button`
width: ${props => props.double ? "160px" : "80px"};
height: 80px;
border-radius: 3px;
border: 1px gray solid;
font-size: 2rem;
padding: 0;
cursor: pointer;

`