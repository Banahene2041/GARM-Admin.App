import { assets } from "@/assets/assets"
import React from "react"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main className='h-screen w-full flex flex-row relative text-[0.875rem] leading-[1.5rem]'>
      <div className='bg-custom-blue-100 w-1/2 relative'>
        <div className='absolute hidden lg:block bottom-0 left-0 xl:left-[30%] xl:-translate-x-[30%]'>
          <img
            src={assets.auth_one}
            alt='auth one'
            className='lg:w-[78%] xl:w-auto 2xl:h-[70vh]'
          />
        </div>
      </div>
      <div className='bg-custom-green-100 h-full w-1/2 relative'>
        <div className='absolute hidden lg:block bottom-0 right-0'>
          <img src={assets.auth_two} alt='auth two' />
        </div>
      </div>
      <div className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-10 w-[90%] sm:max-w-[450px] bg-white shadow-subtle rounded-[10px] p-[20px] py-[30px]'>
        <Outlet />
      </div>
      <div className='absolute left-[50%] -translate-x-[50%] z-10 bg-white w-[90%] top-8 2xl:max-w-[65%] p-[10px] px-[3px] md:px-[10px] shadow-authWrapper rounded-[20px]'>
        <img src={assets.logo_one} alt='' className='w-[9rem] md:w-[11rem]' />
      </div>
      <p className='absolute bottom-10 left-[50%] -translate-x-[50%] w-full text-center'>
        Developed by Epahubb Consult
      </p>
    </main>
  )
}

export default RootLayout
