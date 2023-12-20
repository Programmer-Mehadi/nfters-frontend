import React, { useState } from "react"
import { twMerge } from "tailwind-merge"
export default function TextInput({
  type = "text",
  placeholder = "",
  className = "",
  name = "",
  value = "",
  setValueOnState = () => {},
  thisRef = null,
}) {
  console.log(thisRef)
  const [inputValue, setInputValue] = useState(value)
  return (
    <input
      ref={thisRef}
      type={type}
      name={name}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value)
        setValueOnState(e.target.value)
      }}
      placeholder={placeholder}
      className={twMerge(
        `rounded-[45px] border border-[#F1F1F1] py-3 w-full px-4 ${className}`
      )}
    />
  )
}
