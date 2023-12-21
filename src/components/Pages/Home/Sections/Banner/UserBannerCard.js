/* eslint-disable @next/next/no-img-element */
import React from "react"

export default function UserBannerCard({ item }) {
  return (
    <div
      style={{
        backgroundImage: `url(${item?.image})`,
        backgroundRepeat: "no-repeat",
        height: "100%",
        backgroundSize: "100% 100%",
      }}
      className="p-6 h-full flex flex-col justify-between relative rounded-3xl overflow-hidden min-h-[380px]"
    >
      {/* top details */}
      <div className="relative z-10">
        <h2 className="text-white text-[28px] not-italic font-bold leading-[normal] tracking-[-1.4px]">
          {item?.name}
        </h2>
        <div className="mt-2 flex gap-3 items-center">
          <img src={item?.user?.image} className="w-8 h-8" alt="" />
          <p className="text-white text-xl not-italic font-bold leading-[normal]">
            {item?.user?.name}
          </p>
        </div>
      </div>

      {/* bottom details */}
      <div className="bg-[#FFFFFF33] py-3 px-6 rounded-xl flex flex-wrap justify-between gap-8 items-center relative z-10">
        <div>
          <p className="text-white text-xs not-italic font-medium leading-[normal]">
            Current Bid
          </p>
          <p className="text-white text-base not-italic font-bold leading-[normal] flex gap-2 items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
            >
              <g clip-path="url(#clip0_0_143)">
                <path
                  d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_143">
                  <rect
                    width="13"
                    height="21.3333"
                    fill="white"
                    transform="translate(0 0.512939)"
                  />
                </clipPath>
              </defs>
            </svg>
            {item?.eth} ETH
          </p>
        </div>
        <div>
          <p className="text-white text-xs not-italic font-medium leading-[normal]">
            Ends in
          </p>
          <p className="text-white text-base not-italic font-bold leading-[normal] flex gap-2 items-center mt-2">
            {item?.endsIn}
          </p>
        </div>
      </div>
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-20"></div>
    </div>
  )
}
