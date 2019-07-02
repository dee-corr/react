import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/reducer";
import { forbiddenWordsMiddleware } from "../middleware";
const store = createStore(rootReducer, applyMiddleware(forbiddenWordsMiddleware));
export default store;