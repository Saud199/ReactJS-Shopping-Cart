export function AddToReduxCart(item) {
    return dispatch => {
        dispatch({ type: 'ADDITEM', payload: item  })
    }
}

export function putKeyInCheckArray(key) {
    return dispatch => {
        dispatch({ type: 'ADDITEMKEY', payload: key  })
    }
}

export function IncrementCounter(i) {
    return dispatch => {
        dispatch({ type: 'ADDCOUNTER', payload: i  })
    }
}