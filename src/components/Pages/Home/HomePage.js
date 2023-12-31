import React from "react"
import CollectionFeatured from "./Sections/CollectionFeatured/CollectionFeatured"
import CreateAndSell from "./Sections/CreateAndSell/CreateAndSell"
import DiscoverMoreNFTs from "./Sections/DiscoverMoreNFTs/DiscoverMoreNFTs"
import TheAmazingArt from "./Sections/TheAmazingArt/TheAmazingArt"
import TopCollection from "./Sections/TopCollection/TopCollection"
import BannerSection from "./Sections/Banner/BannerSection"

export default function HomePage() {
  return (
    <section>
      <BannerSection />
      <TheAmazingArt />
      <TopCollection />
      <CollectionFeatured />
      <CreateAndSell />
      <DiscoverMoreNFTs />
    </section>
  )
}
