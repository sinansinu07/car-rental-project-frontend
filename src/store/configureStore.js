import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import companiesReducers from "../reducers/companiesReducers"
import carsReducers from "../reducers/carsReducers"

const configureStore = () => {
    const store = createStore(combineReducers({
        companies: companiesReducers,
        cars: carsReducers
    }), applyMiddleware(thunk))

    return store
}

export default configureStore