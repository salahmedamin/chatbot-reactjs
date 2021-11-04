import { store } from "../redux/store";

export const addOptions = ({ options }) => {
  store.dispatch({
    type: "ADD_OPTIONS",
    options,
  })
};
