const initialState = {
    data : [],
    serverErrors : []
}

export default function companiesReducers(state = initialState, action) {
    switch (action.type) {
        case "SET_COMPANIES" : {
            return { ...state, data : action.payload }
        }
        default : {
            return{ ...state }
        }
    }
}