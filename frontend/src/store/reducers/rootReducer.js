import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
}

const rootReducer = combineReducers({})

export {persistConfig, rootReducer}
