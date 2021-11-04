import React from "react";
import { useSelector } from "react-redux";
import { setLang } from "../../../dispatches/setLang";
const langs = [
    {
        key:"en",
        name:"English",
        flag:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA+CAMAAAAmsHQcAAAAqFBMVEX///+/CzAAJ2jowcO7ABe+ACy8ABv//v6/DjPmur69ACnDLkK+AC3EOEvLWWPbmZ3y3d79+Pm9ACK/HDG5AAEAI2bAwc4AAFwAIGUAGmMABF0AHWQADV8AFWGqEj3X2eCyuMiepLktPnQ6SXtGUYCRmLHm6O0gNnCorsESLmx+haLHy9cAAFRzepry8/aIkKuvT2RTXodkbZG9hZKpADWnACnNvMbGpa8yIHPVAAADtUlEQVRYhe2Z627kNgyFFW2T2bbpvbSujm35JtmTuDPttu//ZiWlSbABFlgMwMBAm/NHOXFgjiV+JD0REqVlkX61fNE+3HxkkcB7+Uege0K9WJltylY9Wwdk/eIp7v0Nhyiu2Z6aASSE9TA6KR3aHm2PtkY7Hlayw3rYDGtcmKdV0YPFadDZVmRtO+GnQfvUklXVU0D713csuqW4IfUSNOje94AKrkcD0Gu0Gvr6YgHjwh8/8ojOF2NJ14WEt00y4mmijS7bfgSyJppEfyVtI5h0ydVFNPQ4YRJ0imYUzUxnPIlHPPK6E02i5GKOa0APVbTSSN+2A6A9tdGjVW0VwEh9brsaLXNctUgnvQO/YWiPNmWrirVbrcE7bTfFG9dsB0pkCI3oHO3xYcocoUWODO5x5qgRo5Hmz594lDlqKvuKo7Zw1BSOilXtNBNHv/KI9nnWM50yBB8AEoSaQAV5Wem32RpaGesGhZRqTEQM1J0icFRU2c6jJWsx6WjljovVUEyhgDOWQ812eBILcRQzVqRPv/Mox8VqlDnShSMsT6cKOdJ4qOsM7sIRNQv/9888Khwlk6zWfjsiOMkuc7ZqRKvScatd8uAUXmXmSEynzzkSn3PknjmaiCPOuBhwLRw1FB5t9cyRzlcv/YgKKWu9mj3Sg+mc1Aw6wazoZ5DJzpTTQSVsEPgJFNLmm194dMlnmeKQG1CItMjUJmoEaehyP0jtXPoCPPzGo2eOlgLO1/qRfLi959BNjovtfYidxV31MQ7YaPUpdh6oXrQBZy99jkh1DsxZN/wy6+Q1OGxArn6x1J4cYrXR58FKtlHyPfDNOWZ56UejprmucEQ2z3Uv/QhPQDPOOQTOa44QHHjNEbwJR3WSyA8ChMPFrEPGScPskaN0sQ5pm9nnK5wW2xMlcBha2lTZr0O250gW+mqY32C+ws7wmEnBESCDg1it2U7irHMlXQtGrHFzA+oQHI3ttxs02TFb30XkCNx5HGtckeR/PvAox91Ckth0UqelQU7HHq1JsljdYa3KV+mRP33DorvMUQEH93gse1xG6QtHW7HYnhbm96OwtvSq57v1ROD0a5uxateh2GjzXLeyzlfeqvrovbVWmaNWuLhjjYu19dGQ1RfryXq2fa6uE1NafeDC4l1f0WEfie/3kbhhmVuun3M+stSB6+vG/e0euhc/7KO9cXrXG+vbfSTueBrq1f13r7qxV9y7fbRbXr3rvy2m9/er3/dveb6wuPr7jf9bveL5N+PV+he6q/OiIzqTHQAAAABJRU5ErkJggg=="
    },
    {
        key:"ar",
        name:"عربي",
        flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/225px-Flag_of_Tunisia.svg.png"
    },
    {
        key:"fr",
        name:"Français",
        flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg/320px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg.png"
    }
]
function DropDown({
    show,
    setshow,
}) {
  const selected = useSelector(state=>state.language)
  return (
      <div
        className="absolute w-40 flex flex-col bg-white"
        style={{
            top:"100%",
            maxHeight: show ? 130 : 0,
            overflow:"hidden",
            transition:".3s ease all",
            zIndex: 500
        }}
      >
          {
              langs.map((a,i)=>
                <div
                    key={i}
                    className={`w-full flex flex-row py-2 px-3${selected.current === a.key ? " bg-blue-800 text-white":""}`}
                    onClick={()=>{
                        setLang({value:a.key, prevValue: selected.current})
                        setshow(false)
                    }}
                >
                    <div
                        style={{
                            backgroundImage:"url("+a.flag+")",
                            backgroundSize:"contain",
                            backgroundRepeat:"no-repeat",
                            backgroundPosition:"center",
                            width: 20,
                            height: 20,
                            marginRight: 5
                        }}
                    />
                    <div
                        style={{
                            color: selected === a.key ? "white":undefined
                        }}
                    >{a.name}</div>
                </div>
              )
          }
      </div>
  );
}

export default DropDown;
