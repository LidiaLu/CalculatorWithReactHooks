import React, { createContext, useReducer } from 'react'

export const CalculatorContext = createContext();


const CalculatorContextProvider = (props) => {

    
   
    // const [state, dispatch] = useReducer(InputReducer, [])

    return (
        <CalculatorContext.Provider value={{  }}>{props.children}</CalculatorContext.Provider>
    )
}

export default CalculatorContextProvider
