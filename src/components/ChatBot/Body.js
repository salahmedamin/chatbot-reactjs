import { useEffect } from "react";
import { useSelector } from "react-redux";
import { translate } from "../../async/translate";
import { setLoading } from "../../dispatches/setIsLoading";
import { store } from "../../redux/store";
import Message from "./Body/Message";
import Options from "./Body/Options";


const convertMessages = async({messages, language})=>{
  let all = []
  for(let message of messages){
    if(message.isSender){
      all = [
        ...all,
        message
      ]
    }
    else{
      const nw = {
        isSender: false,
        content: await translate({
          input: message.content,
          from: language.previous,
          to: language.current
        }),
        originalValue: message.content
      }
      all = [
        ...all,
        nw
      ]
    }
  }
  store.dispatch({
    type:"SET_MESSAGES",
    messages: all
  })
}

const convertOptions = async({options, language})=>{
  let all = []
  for(let a of options){
      const nw ={
        ...a,
        originalValue: a.originalValue || a.value,
        value: await translate({
          input: a.value,
          from: language.previous,
          to: language.current
        })
      } 
      all = [
        ...all,
        nw
      ]
    }
    store.dispatch({
      type:"ADD_OPTIONS",
      options: all
    })
  }


function Body() {
  const messages = useSelector(state=>state.messages)
  const options = useSelector(state=>state.options)
  const language = useSelector(state=>state.language)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{
    if(!language.previous) return;
    setLoading({value:true})
    await convertMessages({messages,language})
    await convertOptions({language,options})
    setLoading({value:false})
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [language])
  return (
  <div className="flex flex-col-reverse w-full h-full py-1 max-h-80 overflow-y-scroll hidescrollbar">
      <Options />
      {
          !messages?.length ? 
          <div
            style={{
                textAlign:"center",
                padding: 10
            }}
          >
              No messages in here
          </div>
          :
          messages.map((a,i)=>(
              <Message
                key={i}
                {...a}
              />
          ))
      }
  </div>
  )
}

export default Body;
