import MainLayout from "@/components/Layout/MainLayout"
import HomePage from "@/components/Pages/Home/HomePage"
import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header"

export default function Home() {
  return (
    <>
      <main className={`bg-white min-h-screen`}>
        <HomePage />
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
