const INITIAL_STATE = {
    reduxCart: [],
    reduxCartCounter: 0
}

// Use Case To Check the triggered Function of Action.js and set the triggered function value init respective obeject or variable  
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'ADDITEM':
            return {
                ...state,
                reduxCart: [action.payload, ...state.reduxCart]
                //reduxCart: [...state.reduxCart , action.payload]
            }

        case 'ADDCOUNTER':
            return ({
                ...state,
                reduxCartCounter: action.payload
            })

        default:
            return state;
    }

}