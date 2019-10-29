import React, { useContext } from 'react'
import styled from "styled-components"
import { CalculatorContext } from "../contexts/CalculatorContext"

const Display = () => {
    const { equationValues, maxDigitsToEnter } = useContext(CalculatorContext);
    // const maxIsReached = equationValues.length === maxDigitsToEnter ? true : false;
    console.log(equationValues)
    return (
        <React.Fragment>
            <p></p>
            <DisplayWrapper>{equationValues}
                {/* {maxIsReached && <p>Only {maxDigitsToEnter} digits are allowed </p>} */}
            </DisplayWrapper>

        </React.Fragment>
    )
}

export default Display

export const DisplayWrapper = styled.div`
margin: 0;
height: 80px;
padding:20px;
background: navy;
text-align: right;
color: white;
font-family: 'Turret Road';
font-size: 1.3rem;
letter-spacing: 1px;
`;

