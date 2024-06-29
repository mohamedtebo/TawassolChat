import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import themeReducer from "./themeReducer";
import authReducer from "./authReducer";

const persistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
}
const rootReducer = combineReducers({
    theme: themeReducer,
    auth: authReducer
});

export {persistConfig, rootReducer};
