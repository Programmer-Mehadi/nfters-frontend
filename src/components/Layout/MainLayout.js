import React from "react"
import Header from "../common/Header"
import Footer from "../common/Footer"

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
