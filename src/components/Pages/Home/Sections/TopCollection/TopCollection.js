/* eslint-disable @next/next/no-img-element */
import LinkButton from "@/components/elements/Buttons/LinkButton"
import React from "react"
import topCollectionsOverList from "@/assets/data/topCollectionsOver.json"
export default function TopCollection() {
  const [userList, setUserList] = React.useState([{}, {}, {}])
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto p-5 py-[100px] grid md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] gap-8">
        <div className="h-full">
          <div className="grid gap-5">
            <img
              src="./assets/images/collection_featured/1.1.png"
              className="w-full h-full"
              alt=""
            />
            <div className="flex justify-between gap-5 items-center flex-wrap mt-8">
              {/* left */}
              <div className="flex gap-2">
                <img
                  src="./assets/images/collection_featured/user_profile.png"
                  alt=""
                  className="w-12 h-12"
                />
                <div>
                  <h2 className="text-black text-xl not-italic font-bold leading-[normal]">
                    The Futr Abstr
                  </h2>
                  <p className="text-[#363639] text-sm not-italic font-normal leading-[normal]">
                    10 in the stock
                  </p>
                </div>
              </div>
              {/* right */}
              <div>
                <p className="text-[#3A3A3A] text-xs not-italic font-medium leading-[normal]">
                  Highest Bid
                </p>
                <span className="flex gap-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_0_213)">
                      <path
                        d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z"
                        fill="#3A3A3A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_213">
                        <rect
                          width="13"
                          height="21.3333"
                          fill="white"
                          transform="translate(0 0.589722)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#3A3A3A] text-base not-italic font-bold leading-[normal]">
                    0.25 ETH
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-10 ">
          {userList?.map((item, index) => (
            <div key={index} className="w-full grid md:grid-cols-2 gap-5">
              <img
                src="./assets/images/collection_featured/1.2.png"
                className="w-full"
                alt=""
              />
              <div>
                <h2 className="text-black text-xl not-italic font-bold leading-[normal]">
                  The Futr Abstr
                </h2>
                <div className="mt-2 mb-4 flex flex-wrap gap-2 items-center">
                  <img
                    src="./assets/images/collection_featured/user_profile.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <span className="flex flex-wrap justify-center gap-2 p-2 border border-[#00AC4F] rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_0_224)">
                        <path
                          d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836Z"
                          fill="#00AC4F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_224">
                          <rect width="8.53125" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-[#00AC4F] text-xs not-italic font-bold leading-[normal]">
                      0.25 ETH
                    </span>
                  </span>
                  <p className="text-[#757575] text-sm not-italic font-normal leading-[normal]">
                    1 of 8
                  </p>
                </div>
                <LinkButton
                  text="Place a bid"
                  className="xl:py-[14px] xl:px-5 bg-white text-[#220970] hover:bg-[#220970] hover:text-white trasition-all"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="lg:border-l lg:border-[#ECECEC] lg:pl-8">
          <h2 className="text-black text-xl not-italic font-bold leading-[normal]">
            Top Collections over{" "}
          </h2>
          <p className="text-[#3D00B7] text-lg not-italic font-bold leading-[normal] pt-2">
            Last 7 days
          </p>
          <div className="mt-3">
            {topCollectionsOverList?.data?.map((item, index) => (
              <div
                className="flex justify-between items-center gap-5 py-4 border-b border-[#F0F0F0]"
                key={index}
              >
                <p className="text-black text-center text-2xl not-italic font-bold leading-[103%] tracking-[-0.6px]">
                  {index + 1}
                </p>
                <div className="flex-1 flex gap-3 items-start">
                  <div className="relative">
                    <img src={item.image} alt="" />
                    {item.verified && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        className="absolute -top-1 -right-2"
                      >
                        <rect
                          x="8"
                          y="10"
                          width="16"
                          height="11"
                          fill="white"
                        />
                        <path
                          d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z"
                          fill="#1E93FF"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h2 className="text-black text-base not-italic font-medium leading-[103%] tracking-[-0.4px]">
                      {item.name}
                    </h2>
                    <div className="mt-2 flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="24"
                        viewBox="0 0 15 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_0_267)">
                          <path
                            d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_267">
                            <rect width="15" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-[#636363] text-sm not-italic font-semibold leading-[103%] tracking-[-0.35px]">
                        {item.etcValue}
                      </span>
                    </div>
                  </div>
                </div>
                {item.inc > 0 ? (
                  <p className="text-[#14C8B0] text-right text-xl not-italic font-semibold leading-[103%] tracking-[-0.5px]">
                    +{item.inc}%
                  </p>
                ) : (
                  <p className="text-[#FF002E] text-right text-xl not-italic font-semibold leading-[103%] tracking-[-0.5px]">
                    -{item.dec}%
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
