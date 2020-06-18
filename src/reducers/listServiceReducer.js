import { nanoid } from 'nanoid'
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE, CHANGE_SERVICE_FILTER } from '../actions/types'


const initialState = [
    { id: nanoid(), title: 'Volodia', price: '22000' },
    { id: nanoid(), title: 'Kupit korovu', price: '45000' },
    { id: nanoid(), title: 'Podarit korovu popu', price: '100' }
]

const filteredState = []

const listServiceReducer = (state = initialState, { type, payload }) => {
    if (type === ADD_SERVICE) {
        const { title, price } = payload
        return [...state, { id: nanoid(), title, price }];
    }

    if (type === REMOVE_SERVICE) {
        const { id } = payload
        return state.filter(item => item.id !== id)
    }

    if (type === EDIT_SERVICE) {
        console.log(payload)
        const { id } = payload
        return state.map(item => {
            if (item.id == id) {
                return payload
            }
            return item
        })
    }

    if (type === CHANGE_SERVICE_FILTER) {
        // const { value } = payload
        console.log(payload)
    }

    return state;
}

export default listServiceReducer