export function AddToReduxCart(item) {
    return dispatch => {
        dispatch({ type: 'ADDITEM', payload: item  })
    }
}

export function IncrementCounter(i) {
    return dispatch => {
        dispatch({ type: 'ADDCOUNTER', payload: i  })
    }
}