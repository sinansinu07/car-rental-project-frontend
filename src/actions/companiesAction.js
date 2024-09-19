import axios from "axios";
import {render} from "../apis/api"


export const startGetCompanies = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${render}/api/companies`)
            dispatch(setCompanies(response.data))
            console.log(response.data)
        } catch(err) {
            console.log(err)
            alert(err.message)
        }
    }
}

const setCompanies = (companies) => {
    return {
        type: "SET_COMPANIES",
        payload: companies
    }
}