import { ADD_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE_FIELD, EDIT_SERVICE, REMOVE_SERVICE, CANCEL, CHANGE_SERVICE_FILTER} from './types'

export const addService = ({title, price}) => (
    {type: ADD_SERVICE, payload: {title, price}}
)

export const removeService = (id) => (
    {type: REMOVE_SERVICE, payload: {id}}
)

export const changeField = (name, value) => (
    {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
)

export const editField = ({title, price, id}) => (
    {type: EDIT_SERVICE_FIELD, payload: {title, price, id}}
)

export const editService = ({title, price, id}) => (
    {type: EDIT_SERVICE, payload: {title, price, id}}
)

export const cancel = () => (
    {type: CANCEL}
)

export const filter = (value) => (
    {type: CHANGE_SERVICE_FILTER, payload: value}
)
