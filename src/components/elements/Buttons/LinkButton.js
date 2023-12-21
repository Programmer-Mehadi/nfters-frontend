import { twMerge } from "tailwind-merge"
import React from "react"

export default function LinkButton({ text = "", className = "", link = "" }) {
  // merge classes
  const combinedClasses = twMerge(
    `bg-[#3D00B7] p-2 px-4  xl:py-[18px] xl:px-10 text-white text-sm font-bold rounded-[60px] border-2 border-[#3D00B7] ${className}`
  )
  return <button className={combinedClasses}>{text}</button>
}
