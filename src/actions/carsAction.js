import axios from "axios";
import {render} from "../apis/api"

export const startGetAllCars = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${render}/api/cars`)
            dispatch(setAllCars(response.data))
            console.log(response.data)
        } catch(err) {
            console.log(err)
            alert(err.message)
        }
    }
}

const setAllCars = (AllCars) => {
    return {
        type: "SET_ALL_CARS",
        payload: AllCars
    }
}

export const startGetCars = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${render}/api/${id}/cars`)
            dispatch(setCars(response.data))
            console.log(response.data)
        } catch(err) {
            console.log(err)
            alert(err.message)
        }
    }
}

const setCars = (cars) => {
    return {
        type: "SET_CARS",
        payload: cars
    }
}