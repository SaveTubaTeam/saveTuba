import { combineReducers } from "redux";
import { user } from "./user";
import { achievements } from "./user-achievements";
const Reducers = combineReducers({
    userState: user,
    userAchievements: achievements

});

export default Reducers;