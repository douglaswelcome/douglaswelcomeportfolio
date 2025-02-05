import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}



 
export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="flex mainBody">
        <div className="page-width ">
          {children}
          </div>
        </main>
      <Footer />
    </>
  )
}
