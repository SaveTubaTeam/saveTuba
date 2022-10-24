import { combineReducers } from "redux";
import { user } from "./user";
import { achievements } from "./user-achievements";
import { achievementsModals } from "./achievementModal";

const Reducers = combineReducers({
    userState: user,
    userAchievements: achievements,
    modals: achievementsModals,
});

export default Reducers;