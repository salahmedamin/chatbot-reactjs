import { combineReducers } from "redux";
import { messages } from "./reducers/messages"
import { options } from "./reducers/options"
import { loading } from "./reducers/loading"
import { language } from "./reducers/language"
import { auth } from "./reducers/auth"

export const reducer = combineReducers({
    messages,
    options,
    loading,
    language,
    auth,
})