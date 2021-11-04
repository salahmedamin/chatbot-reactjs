import React from "react";
import { useSelector } from "react-redux";
import { addMessage } from "../../../../dispatches/addMessage";
import { addOptions } from "../../../../dispatches/addOptions";
import { showAuthForm } from "../../../../dispatches/authForm";
import { tree } from "../../../../tree";

function Option({ content, originalValue, style, onClick }) {
  const authed = useSelector(state=>state.auth)
  return (
    <div
      onClick={() => {
        if(onClick) {
          onClick()
          return;
        }
        const intree = tree.find((a) => a.name.toLowerCase() === (originalValue||content).toLowerCase())
        if(!intree){
            addMessage({
              isSender: true,
              content,
            })
            return;
        }
        if(intree?.requiresAuth && !authed?.authed){
            showAuthForm({
                value: true
            })
        }
        else{
            addMessage({
              isSender: true,
              content: (intree?.requiresAuth ? "#"+authed?.cin+", ":"")+content,
            })
            if(intree.children) addOptions({
              options: intree?.children.map((a) => ({ value: a })),
            })
            if(intree.function) intree.function()
            if(intree.nextInputSubmit) intree.nextInputSubmit()
        }
      }}
      style={{
        borderRadius: 8,
        width: "fit-content",
        marginRight: 3,
        ...style
      }}
      className="border-blue-500 border-2 my-1 py-1.5 px-3 text-blue-500 cursor-pointer hover:text-white hover:bg-blue-500 transition-all duration-100"
    >
      {content||originalValue}
    </div>
  );
}

export default Option;
