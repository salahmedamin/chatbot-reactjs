export const options = (state = [
  {
    value: "Production Service",
  },
  {
    value: "Disaster",
  },
  {
    value: "About us"
  }
], action) => {
  switch (action.type) {
    case "ADD_OPTIONS":
      return action.options;
    case "RESET_OPTIONS":
      return [];
    default:
      return state;
  }
};
