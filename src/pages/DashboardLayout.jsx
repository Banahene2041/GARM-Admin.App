
import Header from "@/components/Dashboard/Header"
import Sidebar from "@/components/Dashboard/Sidebar"
import React from "react"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className='flex text-sm'>
      <Sidebar />
      <main className='lg:ml-[250px] w-full pb-[3rem]'>
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
