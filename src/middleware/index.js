import optionChecker from "./optionChecker";
import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, optionChecker,logger);
