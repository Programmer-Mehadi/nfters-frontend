/* eslint-disable @next/next/no-img-element */
import React from "react"

export default function CollectionFeaturedCard({ item }) {
  return (
    <div>
      <div className="grid grid-cols-[2.5fr_1fr] gap-3">
        <img src={item.images[0]} className="w-full h-full" alt="" />
        <div className="grid gap-3">
          <img src={item.images[1]} className="w-full h-full" alt="" />
          <img src={item.images[2]} className="w-full h-full" alt="" />
          <img src={item.images[3]} className="w-full h-full" alt="" />
        </div>
      </div>
      {/*  */}
      <div className="mt-8 flex flex-wrap justify-between gap-10 gap-y-6 items-end">
        <div>
          <h2 className="text-black text-lg md:text-xl not-italic font-bold leading-[normal]">
            Amazing Collection
          </h2>
          <div className="mt-3 flex items-center gap-2">
            <img src={item.author.img} className="w-7 h-7" alt="" />
            <h4 className="text-black text-sm not-italic font-medium leading-[normal]">
              by {item.author.name}
            </h4>
          </div>
        </div>
        <div>
          <p className="text-[#2639ED] text-[11.001px] not-italic font-bold leading-[normal] py-[10px] px-5 border border-[#2639ED] rounded-[60px]">
            Total 54 Items
          </p>
        </div>
      </div>
    </div>
  )
}
