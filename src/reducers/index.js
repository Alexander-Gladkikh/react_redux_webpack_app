import {combineReducers, legacy_createStore} from "redux";
import {applyMiddleware} from "redux";
import {reposReducer} from "./reposReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: reposReducer
})


export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
