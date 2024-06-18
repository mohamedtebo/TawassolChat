import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import themeReducer from "./themeReducer";

const persistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
}
const rootReducer = combineReducers({
    theme: themeReducer
});

export {persistConfig, rootReducer};
