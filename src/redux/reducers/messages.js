import { translate } from "../../async/translate";

export const messages = (
  state = [
    {
      isSender: false,
      content:
        "Hello ! I'm AmiBot, Ami Insurance's chatbot, if you need any help, I'm right here !",
    },
  ],
  action
) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [action.message, ...state];
    case "SET_MESSAGES":
      return action.messages

    // case "TRANSLATE_MESSAGES":
    //   let all = []
    //   for(let message of state){
    //     if(message.isSender){
    //       all = [
    //         ...all,
    //         message
    //       ]
    //     }
    //     else{
    //       const content = translate({
    //         input: message.content,
    //         from: action.from,
    //         to: action.to
    //       })
    //       console.log(content)
    //       const nw = {
    //         ...message,
    //         content: "hey"
    //       }
    //       all = [
    //         ...all,
    //         nw
    //       ]
    //     }
    //   }
    //   return all


    case "RESET_MESSAGES":
      return []
    
    default:
      return state;
  }
};
