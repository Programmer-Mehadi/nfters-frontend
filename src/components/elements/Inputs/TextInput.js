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
  // store value in state
  /**
   * type: for type of input
   * placeholder: for placeholder
   * className: for styling
   * name: for name
   * value: for value
   * setValueOnState: for setting value in state
   * thisRef: for ref of input
   */
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
