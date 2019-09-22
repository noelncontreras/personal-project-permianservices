import axios from "axios";

//initialState
const initialState = {
    category: [],
    service: []
};

//constants
const UPDATE_CATEGORY = "UPDATE_CATEGORY";
const UPDATE_SERVICE = "UPDATE_SERVICE";
const ADD_SERVICE = "ADD_SERVICE";
const EDIT_SERVICE = "EDIT_SERVICE";
const DELETE_SERVICE = "DELETE_SERVICE";

//action creators
export function updateCategory() {
    return {
        type: UPDATE_CATEGORY,
        payload: axios.get("/user/category")
    };
};

export function updateService(category_id) {
    return {
        type: UPDATE_SERVICE,
        payload: axios.get("/user/service/:category_id", category_id)
    };
};

export function addService(newService) {
    return {
        type: ADD_SERVICE,
        payload: axios.post("/user/service", newService)
    };
};

export function editService(serviceInfo) {
    return {
        type: EDIT_SERVICE,
        payload: axios.put("/user/service", serviceInfo)
    };
};

export function deleteService(service_id) {
    return {
        type: DELETE_SERVICE,
        payload: axios.delete(`/user/service/:${service_id}`)
    };
};

//reducer
export default function reducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        default:
            return state;
    };
};