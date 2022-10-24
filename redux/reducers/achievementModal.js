const initialState = {
  isOpen: false,
  achievement: null,
};

export const achievementsModals = (state = initialState, action) => {
  switch (action.type) {
    case "MODAL_OPENED":
      return {
        ...state,
        isOpen: true,
      };
    case "MODAL_CLOSED":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return false;
  }
};
