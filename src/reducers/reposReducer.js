const SET_COUNT = 'SET_COUNT'

const defaultState = {
    items: [],
    isFetching: true
}

export const reposReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}

export const setCount = (count) => ({type: SET_COUNT, payload: count})
