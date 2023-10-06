import { applyMiddleware, createStore } from "redux";
import formReducer from "../reducer/formReducer";
import thunk from "redux-thunk";

const store = createStore(formReducer, applyMiddleware(thunk))

export default store