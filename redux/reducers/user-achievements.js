const initialState = { 
    achievements: null
};

export const achievements = (state = initialState, action) => {
    switch (action.type) {
        case 'ACHIEVEMENTS_STATE_CHANGE':
            return {
                ...state,
                achievements: action.achievements
            };
        default: 
            return state;
    }
};