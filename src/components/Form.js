import React, { useEffect, useState } from "react";
import axios from "axios"
import { setAuthed } from "../dispatches/setAuthed";
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function Form() {
  const [step, setstep] = useState(0);
  const [cin, setcin] = useState("");
  const [code, setcode] = useState(null)
  const [customcode, setcustomcode] = useState(null)
  const [error, seterror] = useState(false)

  const verifyCode = ()=>{
    if(customcode !== code){
        seterror(true)
    }
    else{
        setAuthed({cin})
        seterror(false)
        setcode("")
        setcustomcode("")
    }
  }
  useEffect(() => {
    if(step) setcode(makeid(6))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  useEffect(() => {
      if(!code) return;
      (async()=>await axios.get("http://localhost:9800/verify-phone/"+code))()
  }, [code]);
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 600,
        background: "rgb(0,0,0,0.6)",
      }}
      className="w-full h-full"
    >
      <div
        style={{
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
        }}
        className="bg-white p-10"
      >
        <div className="text-center pt-10 font-bold" style={{ fontSize: 20 }}>
          Authentication
        </div>
        <div className="flex flex-col p-3 items-center justify-center">
          <div className="flex flex-col">
            <input
              value={!step ? cin : customcode}
              onChange={(e)=>!step ? setcin(e.target.value) : setcustomcode(e.target.value)}
              type="text"
              placeholder={`${!step ? "CIN" : "Verification Code"}`}
              style={{ background: "transparent", outline: "none" }}
              className="border-b-2 border-gray-600"
            />
            <input
              type="submit"
              value={!step ? "Proceed" : "Verify"}
              style={{}}
              className="mt-5 p-2 rounded bg-gray-600 text-white cursor-pointer"
              onClick={() => !step ? setstep(1) : verifyCode()}
            />
            {
                error ? 
                <div className="text-red-500">
                    Invalid Code, Please try again
                </div>
                :null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
