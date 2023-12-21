import { twMerge } from "tailwind-merge"
import React from "react"

export default function Button({
  text = "",
  className = "",
  onClickFnc = () => {},
}) {
  // merge classes
  // onClickFnc here for click event of button
  const combinedClasses = twMerge(
    `bg-[#3D00B7] p-2 px-4  xl:py-[18px] xl:px-10 text-white text-sm font-bold rounded-[60px] border-2 border-[#3D00B7] ${className}`
  )
  return (
    <button onClick={onClickFnc} className={combinedClasses}>
      {text}
    </button>
  )
}
