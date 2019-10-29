export const InputReducer = (state, action) => {
    // console.log("state in reducer:", typeof (state), state)
    // console.log("action in reducer: ", typeof (action), action)

    switch (action.type) {
        // case "MAX_REACHED":
        //     return [...action.equationValues]
        case 'CALCULATE':
            const equation = [...state].join("")
            const res = eval(equation)
            return [res]
        case "INPUT":
            return [...state, action.inputValue]
        case "CLEAR":
            return action.equationValues
        default:
            break;
    }
}