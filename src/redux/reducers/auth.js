
export const auth = (state = {
    authed: false,
    showAuthForm: false
  }, action) => {
      switch (action.type) {
        case "SET_AUTHED":
          return {
              authed: true,
              cin: action.cin
          }
        case "SET_SHOW_AUTH_FORM":
          return {
            ...state,
            showAuthForm: action.value
          }
        default:
          return state;
      }
    };
    