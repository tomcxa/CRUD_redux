import { CHANGE_SERVICE_FILTER } from '../actions/types'

const initialState = ''

const filterServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SERVICE_FILTER:
            return action.payload
        default:
            return state
    }
}

export default filterServiceReducer