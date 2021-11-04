export const language = (state = {
  current: "en",
  previous: ""
}, action) => {
    switch (action.type) {
      case "SET_LANG":
        return {
          current: action.value||state.current,
          previous: action.prevValue||state.previous,
        }
      default:
        return state;
    }
  };
  