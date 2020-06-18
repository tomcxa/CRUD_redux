import { CHANGE_SERVICE_FIELD, EDIT_SERVICE_FIELD, CANCEL } from "../actions/types"

const initialState = {
    title: '',
    price: '',
}

const addServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload
            return {...state, [name]: value}
        case EDIT_SERVICE_FIELD:
            console.log(action.payload)
            return action.payload
        case CANCEL:
            return initialState
        default:
            return state
    }
}

export default addServiceReducer