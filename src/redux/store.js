import {createStore,combineReducers,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {slice__catsReducer} from "./reducers/slice__catsReducer";

const composEnhisers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const reducers = combineReducers(
    {
        slice__catsReducer
    }

)


export const store = createStore(reducers,composEnhisers(applyMiddleware(thunk)))