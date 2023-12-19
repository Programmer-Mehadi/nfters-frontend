import HomePage from "@/components/Pages/Home/HomePage"
import { Inter } from "next/font/google"
// eslint-disable-next-line @next/next/no-document-import-in-page

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <HomePage />
      </main>
    </>
  )
}
