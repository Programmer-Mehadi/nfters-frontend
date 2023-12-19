/* eslint-disable @next/next/no-img-element */
import LinkButton from "@/components/elements/Buttons/LinkButton"
import React from "react"

export default function CreateAndSell() {
  return (
    <section className="bg-white p-5 py-[100px]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[52%_44%] gap-[4%]">
        <div className="grid grid-cols-[40%_50%] gap-10 md:gap-14 ">
          <div className="grid gap-14">
            <div>
              <div className="relative">
                <img
                  src={"./assets/images/create_and_sell/1.png"}
                  className="w-[100%] auto"
                  alt=""
                />
                <img
                  className="absolute -bottom-8 -right-8"
                  src={"./assets/images/create_and_sell/user-1.png"}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  src={"./assets/images/create_and_sell/3.png"}
                  className="w-[85%] md:w-[70%] h-auto ml-auto"
                  alt=""
                />
                <img
                  className="absolute -bottom-8 -right-8"
                  src={"./assets/images/create_and_sell/user-2.png"}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end md:justify-start relative">
            <div className="relative w-[80%]">
              <img
                src={"./assets/images/create_and_sell/2.png"}
                className="w-[95%] md:w-[85%] h-auto"
                alt=""
              />
              <img
                className="absolute -bottom-8 right-0"
                src={"./assets/images/create_and_sell/user-2.png"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full pt-16 md:pt-0">
          <h2 className="text-black text-[32px] not-italic font-bold leading-[normal] uppercase">
            Create and <br /> sell your NFTs
          </h2>
          <p className="text-[#636363] text-lg not-italic font-normal leading-[160%] my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <LinkButton
            text="Sign Up Now"
            className="py-[20px] px-[40px] w-fit"
          />
        </div>
      </div>
    </section>
  )
}
