import React from 'react'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

const SiteLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-white">{children}</main>
      <Footer />
    </>
  )
}

export default SiteLayout
