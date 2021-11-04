import React, { useRef } from "react";
import { useState } from "react";
import BottomRightIcon from "./BottomRightIcon";
import Header from "./ChatBot/Header";
import Input from "./ChatBot/Input";
import Body from "./ChatBot/Body";
import Loading from "./ChatBot/Loading";
import { useSelector } from "react-redux";
const ChatBot = () => {
  const [show, setShow] = useState(false);
  const isLoading = useSelector((state) => state.loading);
  const ref = useRef()
  return (
    <div>
      <BottomRightIcon setShow={() => setShow(!show)} />
        <form
          ref={ref}
          encType="multipart/form-data"
          onSubmit={(e) => e.preventDefault()}
          className={`flex overflow-hidden flex-col h-auto w-80 justify-between absolute right-32 shadow-2xl rounded-lg bottom-10 duration-1000 ease-in-out`}
          style={{
            transition: ".4s ease all",
            opacity: show ? 1 : 0,
            visibility: show ? "visible":"hidden",
            transform: !show ?"translateX(100%)":undefined
          }}
        >
          {isLoading ? <Loading /> : null}
          <Header setShow={setShow} />
          <Body />
          <Input />
        </form>
    </div>
  );
};

export default ChatBot;
