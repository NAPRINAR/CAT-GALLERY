
export const constants = {
    SET_CATS:"SET_CATS",
    SET_IMAGES:"SET_IMAGES"
}
const initialState = [

]


export const slice__catsReducer =(state=initialState, action) => {
    switch(action.type){
        case constants.SET_CATS:
            return{
                ...state,
                categories:action.payload.categories
            }
        case constants.SET_IMAGES:
            return {
                ...state,
                images:action.payload.images
            }
        default:return state
    }
}