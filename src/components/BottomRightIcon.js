import React from 'react'

function BottomRightIcon({
    setShow
}) {
    return (
        <div
          className="cursor-pointer absolute right-10 bottom-10 transition duration-500 ease-in-out transform"
          onClick={setShow}
          style={{
            backgroundImage:"url(/img/bot_logo.png)",
            backgroundSize:"contain",
            backgroundPosition:"center center",
            backgroundRepeat:"no-repeat",
            width: 50,
            height: 50,
            borderRadius: 50,
            boxShadow:"0px 0px 10px 1px rgb(0,0,0,.6)",
          }}
        />
    )
}

export default BottomRightIcon
