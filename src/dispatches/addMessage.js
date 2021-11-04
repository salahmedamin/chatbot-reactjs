import { store } from "../redux/store";

export const addMessage = ({
    isSender,
    content,
    image
})=>store.dispatch({
    type:"ADD_MESSAGE",
    message:{
        isSender,
        content,
        image
    }
})