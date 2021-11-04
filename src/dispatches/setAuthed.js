import { store } from "../redux/store";

export const setAuthed = ({ cin }) => {
  store.dispatch({
    type: "SET_AUTHED",
    cin,
  });
};
