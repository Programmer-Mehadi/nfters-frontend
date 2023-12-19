import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header"
import React from "react"
import CollectionFeatured from "./Sections/CollectionFeatured/CollectionFeatured"

export default function HomePage() {
  return (
    <section>
      <Header />
      <CollectionFeatured />
      <Footer />
    </section>
  )
}
