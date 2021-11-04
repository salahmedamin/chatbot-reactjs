import { store } from "../redux/store";

export const addOptions = ({ options = false, messages = false }) => {
  if (!(messages || options)) return;
  store.dispatch({
    type: "RESET_" + (options ? "OPTIONS" : messages ? "MESSAGES" : ""),
    options,
  });
};
