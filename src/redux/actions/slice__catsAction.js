import axios from "axios";
import {constants} from "../reducers/slice__catsReducer";



export const setCats = (categories) => {
    return({
        type:constants.SET_CATS,
        payload:{
            categories
        }
    })
}

export const setImages = (images) =>{
    return({
        type:constants.SET_IMAGES,
        payload:{
            images
        }
    })
}


export const categoriesFetchData =  () => (dispatch) => {
    const response =  axios.get('https://api.thecatapi.com/v1/categories');
    response.then(response => dispatch(setCats(response.data)))
}

export const imagesFetchData = (imagesCount=10,positionId=2) => (dispatch) => {
    const response = axios.get(`https://api.thecatapi.com/v1/images/search?limit=${imagesCount}&page=1&category_ids=${positionId}`)
    response.then(response => dispatch(setImages(response.data)))
}


