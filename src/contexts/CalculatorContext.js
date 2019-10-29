import React, { createContext, useReducer } from 'react'
import { InputReducer } from '../reducers/InputReducer';

export const CalculatorContext = createContext();


const CalculatorContextProvider = props => {
    const [equationValues, dispatch] = useReducer(InputReducer, [])
    const maxDigitsToEnter = 17
    return (
        <CalculatorContext.Provider value={{ maxDigitsToEnter, equationValues, dispatch }}>{props.children}</CalculatorContext.Provider>
    )

}

export default CalculatorContextProvider
