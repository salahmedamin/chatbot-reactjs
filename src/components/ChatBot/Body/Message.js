import React from 'react'

function Message({
    isSender,
    content,
    image
}) {
    return (
        <div
            className="w-full p-2"
            style={{
                display:"flex",
                justifyContent: `flex-${isSender ? "end":"start"}`,
                maxWidth: "75%",
                wordBreak:"break-word",
                alignSelf: isSender ? "end" : undefined
            }}
        >
           <div
            style={{
                borderRadius: !image ? 5 : undefined,
                maxWidth: "100%",
                width: image ? 150 : undefined,
                height: image ? 150 : undefined,
                backgroundImage: image ? `url(${image})` : "",
                backgroundSize:"contain",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"right center"
            }}
            className={`${isSender && !image ? "bg-gradient-to-r from-blue-400 via-blue-600 to-blue-600 text-white" : !image ? "text-gray-700 border-2 border-gray-200" : ""} ${!image ? "px-4 py-2":""}`}
           >
                {content||""}   
            </div> 
        </div>
    )
}

export default Message
