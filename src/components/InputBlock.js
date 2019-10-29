import React, { useContext, useState } from 'react'
import styled from "styled-components"
import uuid from "uuid/v1"
import { CalculatorContext } from '../contexts/CalculatorContext'

const InputBlock = () => {
    const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const { dispatch, maxDigitsToEnter } = useContext(CalculatorContext)
    const [equationValues, setEquationValues] = useState([]);
    const [inputDigits, setDigits] = useState([])

    const handleDigitInput = e => {
        console.log(inputDigits)
        if (inputDigits.length < 17) {
            setDigits([...inputDigits, e.target.value])
            dispatch({ type: "INPUT_DIGIT", digits: e.target.value })
        } else dispatch({ type: "MAX_REACHED", equationValues })

    }

    const handleInput = e => {
        if (equationValues.length < 17) {
            setEquationValues([...equationValues, e.target.value])
            dispatch({ type: "INPUT", inputValue: e.target.value })
        } else {
            dispatch({ type: "MAX_REACHED", equationValues })
        }
    }



    const handleCalculation = (e) => {
        e.preventDefault()
        dispatch({ type: 'CALCULATE', equationValues })
    }

    const handleClear = () => {
        setEquationValues([])
        dispatch({ type: 'CLEAR', equationValues: "" })
    }

    return (
        <InputsWrapper>
            <NumsButtonsWrapper>
                {numsArray.map(num =>
                    <NumberButton key={uuid()} type="button" name={num} value={num} onClick={handleDigitInput}>{num}</NumberButton>)
                }
                <NumberButton key={uuid()} type="button" name="decimal" value="." onClick={handleDigitInput} >,</NumberButton>
                <NumberButton danger key={uuid()} type="button" name="clear" value="clear" onClick={handleClear} >CL</NumberButton>

            </NumsButtonsWrapper>
            <OperatorsWrapper>
                <OperatorButton secondary key={uuid()} type="button" name="add" value="+" onClick={handleInput}>+</OperatorButton>
                <OperatorButton secondary key={uuid()} type="button" name="subtract" value="-" onClick={handleInput}>-</OperatorButton>
                <OperatorButton secondary key={uuid()} type="button" name="multiply" value="*" onClick={handleInput}>x</OperatorButton>
                <OperatorButton secondary key={uuid()} type="button" name="divide" value="/" onClick={handleInput}>/</OperatorButton>
                <OperatorButton primary key={uuid()} type="submit" name="equals" value="=" onClick={handleCalculation} >=</OperatorButton>

            </OperatorsWrapper>
        </InputsWrapper>
    )
}

export default InputBlock


export const InputsWrapper = styled.div`
display: flex;
width: 330px;
`;

export const OperatorsWrapper = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
`
    ;

export const NumsButtonsWrapper = styled.div`
padding: 0;
width: 240px;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
justify-content: flex-start;
`

export const NumberButton = styled.button`
width: ${props => props.double ? "160px" : "80px"};
height: 80px;
border-radius: 3px;
border: 1px gray solid;
font-size: 2rem;
padding: 0;
cursor: pointer;
background-color: ${props => props.danger && "red"};
color: ${props => props.danger && "white"};


`
export const OperatorButton = styled.button`
width: ${props => props.double ? "160px" : "80px"};
height: 64px;
font-size: 2rem;
background-color: ${props => props.primary && "orange"};
background-color: ${props => props.secondary && "brown"};

`;