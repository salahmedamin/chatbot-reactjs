import { faFileImage, faMicrophone, faPaperPlane, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { getImageTags } from "../../async/getImageTags";
import { addMessage } from "../../dispatches/addMessage";
import { addOptions } from "../../dispatches/addOptions";
import { setLoading } from "../../dispatches/setIsLoading";

function Input() {
  const read = (event) => {
    return URL.createObjectURL(event.target.files[0]);
  };
  const add = () => {
    if (!input) return;
    addMessage({
      isSender: true,
      content: input,
    });
    setinput("");
  };
  const [input, setinput] = useState("");
  const [expand, setexpand] = useState(false)
  const ref = useRef();
  return (
    <div className="flex justify-around z-20 bottom-0 w-full items-center p-3 border-t-2">
      <div className="flex py-1 overflow-hidden" style={{maxWidth: !expand ? 25 : 75, transition:".3s ease all"}}>
        {/* PLUS */}
        <div className="mr-2" style={{transform: expand ? "rotate(45deg)" : undefined, transition: ".3s ease all"}} onClick={()=>setexpand(!expand)}>
          <FontAwesomeIcon
            icon={faPlus}
            className="text-2xl cursor-pointer text-blue-600"
          />
        </div>
        {/* FILE */}
        <div className="mr-3">
          <FontAwesomeIcon
            icon={faFileImage}
            className="text-2xl cursor-pointer text-blue-600"
            onClick={() => ref.current.click()}
          />
          <input
            ref={ref}
            onChange={async (e) => {
              setLoading({ value: true });
              addOptions({
                options: await getImageTags({ image: e.target.files[0] }),
              });
              addMessage({
                isSender: true,
                image: read(e),
              });
              setLoading({ value: false });
            }}
            type="file"
            style={{ display: "none" }}
          />
        </div>
        {/* VOCAL */}
        <div>
          <FontAwesomeIcon
            icon={faMicrophone}
            className="text-2xl cursor-pointer text-blue-600"
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="Your message..."
        className="border-0 focus:outline-none text-sm"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      ></input>
      <button
        onClick={() => {
          add();
          if (window.nextInputSubmit) {
            window.nextInputSubmit(input);
            window.nextInputSubmit = undefined;
          }
        }}
        type="submit"
        className="cursor-pointer text-sm font-semibold"
      >
        <div className="p-1">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-lg text-blue-600"
          />
        </div>
      </button>
    </div>
  );
}

export default Input;
