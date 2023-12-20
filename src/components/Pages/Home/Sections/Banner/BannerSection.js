/* eslint-disable @next/next/no-img-element */
import LinkButton from "@/components/elements/Buttons/LinkButton"
import React from "react"
import "swiper/css"
import "swiper/css/effect-cards"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import UserBannerCard from "./UserBannerCard"
import bannerCardData from "@/assets/data/bannerCardData.json"
export default function BannerSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto p-5 py-16 grid lg:grid-cols-2 gap-16">
        {/* left */}
        <div>
          <h2 className="text-black text-[40px] not-italic font-extrabold uppercase leading-[normal] tracking-[2px]">
            Discover, and collect <br /> Digital Art NFTs{" "}
          </h2>
          <p className="text-[#565656] text-xl not-italic font-normal leading-[160%] mt-6">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <LinkButton text="Explore Now" className="mt-10 xl:py-3" />
          <div className="mt-8 flex flex-wrap gap-5">
            <div className="grid gap-0">
              <h2 className="text-black text-[40px] not-italic font-bold leading-[normal] tracking-[2px]">
                98K+
              </h2>
              <p className="text-[#565656] text-xl not-italic font-normal ">
                Artworks
              </p>
            </div>
            <div className="grid gap-0">
              <h2 className="text-black text-[40px] not-italic font-bold leading-[normal] tracking-[2px]">
                12K+
              </h2>
              <p className="text-[#565656] text-xl not-italic font-normal">
                Auction
              </p>
            </div>
            <div className="grid gap-0">
              <h2 className="text-black text-[40px] not-italic font-bold leading-[normal] tracking-[2px]">
                15K+
              </h2>
              <p className="text-[#565656] text-xl not-italic font-normal">
                Artist
              </p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="h-full ">
          <div className="relative w-[98%] max-w-[450px] mx-auto">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper h-full max-w-[250px] sm:max-w-[300px] ml-5 mobile-sm-md:max-w-[350px] md:max-w-[400px]"
            >
              {bannerCardData?.data?.map((item, index) => (
                <SwiperSlide key={index}>
                  <UserBannerCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <img
              src="./assets/images/banner_card/tag.png"
              className="absolute bottom-20 w-20 md:w-[120px] z-20 -left-[22px] md:-left-[40px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
