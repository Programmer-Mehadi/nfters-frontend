/* eslint-disable @next/next/no-img-element */
import React from "react"

export default function DiscoverMoreCard({ item }) {
  return (
    <div className="p-[10px] rounded-[14px] border border-[#F2F2F280] bg-white">
      <div className="relative">
        <img src={item.image} className="w-full h-full rounded-[14px]" alt="" />
        {item.users.map((user, index) => (
          <img
            src={user}
            alt=""
            className={`h-[30px] w-[30px] absolute -bottom-3 rounded-full`}
            key={index}
            style={{
              left: `${30 + (index - 1) * 15}px`,
            }}
          />
        ))}
      </div>
      <div className="pt-7 pb-2 px-4">
        <h2 className="text-black text-[19.747px] not-italic font-bold leading-[19.146px]">
          {item.name}
        </h2>
        <div className="mt-[10px] flex justify-between gap-4">
          <span className="text-[#00AC4F] flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
            >
              <g clip-path="url(#clip0_431_14)">
                <path
                  d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z"
                  fill="#00AC4F"
                />
              </g>
              <defs>
                <clipPath id="clip0_431_14">
                  <rect
                    width="9.35928"
                    height="15.3588"
                    fill="white"
                    transform="translate(0.125 0.332336)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[#00AC4F] text-[10.971px] not-italic font-bold leading-[normal]">
              ETH
            </span>
          </span>

          <span className="text-[#838383] text-right text-[13.165px] not-italic font-medium leading-[19.146px]">
            {item.select} of {item.maxSelect}
          </span>
        </div>
        <hr className="mt-5" />

        <div className="mt-5 flex items-center justify-between gap-5 ">
          <span className="text-[#5539A8] text-right text-[12px] not-italic font-bold leading-[19.146px] rounded-[110px] bg-[#F5F5F5] py-[6px] px-5">
            {item.timeLeft}
          </span>
          <span className="text-[#4F33A3] hover:font-bold text-[15.359px] not-italic font-medium leading-[normal] cursor-pointer hover:underline">
            Place a bid
          </span>
        </div>
      </div>
    </div>
  )
}
