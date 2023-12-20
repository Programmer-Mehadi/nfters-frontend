import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header"
import React from "react"
import CollectionFeatured from "./Sections/CollectionFeatured/CollectionFeatured"
import CreateAndSell from "./Sections/CreateAndSell/CreateAndSell"
import DiscoverMoreNFTs from "./Sections/DiscoverMoreNFTs/DiscoverMoreNFTs"

export default function HomePage() {
  return (
    <section>
      <Header />
      <CollectionFeatured />
      <CreateAndSell />
      <DiscoverMoreNFTs />
      <Footer />
    </section>
  )
}
