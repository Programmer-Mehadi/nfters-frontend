import React, { useEffect } from "react"
import categories from "@/assets/data/categories.json"
import discoverMoreData from "@/assets/data/discover-more.json"
import DiscoverMoreCard from "./DiscoverMoreCard"
import LinkButton from "@/components/elements/Buttons/LinkButton"
export default function DiscoverMoreNFTs() {
  const [activeCategories, setActiveCategories] = React.useState(1)
  const [discoverMoreDataList, setDiscoverMoreDataList] = React.useState([])

  useEffect(() => {
    if (activeCategories === 1) {
      setDiscoverMoreDataList(discoverMoreData?.data)
      return
    }
    setDiscoverMoreDataList(
      discoverMoreData?.data?.filter(
        (item) => item.categoryId === activeCategories
      )
    )
  }, [activeCategories])
  return (
    <section className="bg-[#D9E0EC33] p-5">
      <div className="max-w-[1200px] mx-auto py-14">
        <h2 className="text-black text-[34px] not-italic font-bold leading-[normal]">
          Discover more NFTs
        </h2>
        {/* filter and categories */}
        <div className="mt-9 flex justify-between gap-8 flex-wrap">
          {/* categories */}
          <div className="flex items-center gap-3 overflow-auto">
            {categories?.data?.map((item, index) => (
              <div
                onClick={() => setActiveCategories(item.id)}
                key={index}
                className={`${
                  activeCategories === item.id
                    ? "bg-[#3D00B7] text-white"
                    : "bg-[#DCDCDC33]  text-black hover:bg-[#3D00B720] hover:text-black transition-all"
                } rounded-[100px] text-sm not-italic font-medium leading-[17.452px] py-[10px] px-5 cursor-pointer min-w-fit`}
              >
                {item.name}
              </div>
            ))}
          </div>
          {/* filter */}
          <div>
            <div className="bg-[#DCDCDC33] rounded-[100px] px-5 py-[10px] flex gap-2 items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_0_399)">
                  <path
                    d="M9.33333 20H14.6667V17.3333H9.33333V20ZM0 4V6.66667H24V4H0ZM4 13.3333H20V10.6667H4V13.3333Z"
                    fill="#371C87"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_399">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#371C87] text-sm not-italic font-medium leading-[17.452px]">
                All Filters
              </span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 mt-10">
          {discoverMoreDataList?.map((item, index) => (
            <DiscoverMoreCard key={index} item={item} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <LinkButton
            text="More NFTs"
            className="bg-[#fff] text-[#3D00B7] w-fit"
          />
        </div>
      </div>
    </section>
  )
}
