import optionChecker from "./optionChecker";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, optionChecker);
