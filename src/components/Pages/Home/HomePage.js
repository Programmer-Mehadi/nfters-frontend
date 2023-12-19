import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header"
import React from "react"
import CollectionFeatured from "./Sections/CollectionFeatured/CollectionFeatured"
import CreateAndSell from "./Sections/CreateAndSell/CreateAndSell"

export default function HomePage() {
  return (
    <section>
      <Header />
      <CollectionFeatured />
      <CreateAndSell />
      <Footer />
    </section>
  )
}
