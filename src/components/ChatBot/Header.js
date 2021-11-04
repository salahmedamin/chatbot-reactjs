import React from 'react'
import Lang from './Header/Lang'

function Header() {
    return (
        <div className="flex justify-between items-center h-16 border-b-2 border-gray-200">
            <div className="cursor-pointer p-2 flex items-center">
              <img
                src="/img/bot_logo.png"
                width="60"
                className="rounded-full p-2"
                alt=""
              />
              <span className="text-gray-700 font-mono">
                AMIBOT
              </span>
            </div>
            <Lang />
          </div>
    )
}

export default Header
