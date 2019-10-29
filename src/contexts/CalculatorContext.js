import React, { createContext, useReducer } from 'react'
import { InputReducer } from '../reducers/InputReducer';

export const CalculatorContext = createContext();


const CalculatorContextProvider = props => {
    const [digits, dispatch] = useReducer(InputReducer, [])
    const maxDigitsToEnter = 17
    return (
        <CalculatorContext.Provider value={{ digits, maxDigitsToEnter, dispatch }}>{props.children}</CalculatorContext.Provider>
    )

}

export default CalculatorContextProvider
