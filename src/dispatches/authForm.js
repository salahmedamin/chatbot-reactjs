
import { store } from "../redux/store";

export const showAuthForm = ({ value }) => {
  store.dispatch({
    type: "SET_SHOW_AUTH_FORM",
    value,
  })
};
