import { store } from "../redux/store";

export const setLang = ({ value, prevValue }) => {
  store.dispatch({
    type: "SET_LANG",
    value,
    prevValue
  });
};
