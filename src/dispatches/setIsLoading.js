import { store } from "../redux/store";

export const setLoading = ({ value }) => {
  store.dispatch({
    type: "SET_LOADING",
    value,
  });
};
