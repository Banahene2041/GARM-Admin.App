import { BanknoteX, Calendar, CalendarDays, ShieldX, Sigma } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

const CPDOverview = () => {
  return (
    <div className='shadow-subtle w-full h-full justify-between bg-white text-black-100 py-[24px] rounded-radius-200'>
      <div className='pb-[14px] border-b-[1px] border-b-border-gray-100 relative px-[24px] flex items-center justify-between'>
        <div>
          <p className='text-[16px]'>CPD Progress</p>
          <p className='text-custom-lightGray-100 text-[10px]'>
            CPD points total
            <span className='ml-[2px] text-black-100 font-semibold text-[11px] mx-1'>
              50
            </span>
          </p>
        </div>
        <Link
          to='/dashboard/cpd-points'
          className='text-[12px] font-semibold text-custom-lightGray-100 w-[4rem] py-[6px] rounded-[5px] text-center bg-waterColor hover:text-custom-blue-100 hover:bg-transparent-100'
        >
          View
        </Link>
        <div className='absolute top-0 left-0 z-0 h-[25px] bg-custom-blue-100 w-[2.5px] rounded-l-0 rounded-[10px]' />
      </div>

      {/* main content here */}
      <div className='mt-4 px-5'>
        <div className='flex items-center gap-2 mb-4'>
          <div
            className={`h-[32px] w-[32px] flex items-center justify-center rounded-full bg-amber-100`}
          >
            <Sigma className='text-amber-500' />
          </div>
          <div className='flex items-center gap-2'>
            <h2 className='text-lg font-extralight'>Total CPD Points</h2>
            <div className='w-4 h-[1.8px] bg-black-100' />
            <h1 className='font-semibold text-xl'>50</h1>
          </div>
        </div>
        <div className='flex items-center gap-2 mb-4'>
          <div
            className={`h-[32px] w-[32px] flex items-center justify-center rounded-full bg-red-100`}
          >
            <BanknoteX className='text-red-500' />
          </div>
          <div className='flex items-center gap-2'>
            <h2 className='text-lg font-extralight'>Total Rejected</h2>
            <div className='w-4 h-[1.8px] bg-black-100' />
            <h1 className='font-semibold text-xl'>5</h1>
          </div>
        </div>
        <div className='flex items-center gap-2 mb-4'>
          <div
            className={`h-[32px] w-[32px] flex items-center justify-center rounded-full bg-green-100`}
          >
            <BanknoteX className="text-green-500" />
          </div>
          <div className='flex items-center gap-2'>
            <h2 className='text-lg font-extralight'>Total Approved</h2>
            <div className='w-4 h-[1.8px] bg-black-100' />
            <h1 className='font-semibold text-xl'>30</h1>
          </div>
        </div>
        <div className='flex items-center gap-2 mb-4'>
          <div
            className={`h-[32px] w-[32px] flex items-center justify-center rounded-full bg-blue-100`}
          >
            <ShieldX className="text-blue-500" />
          </div>
          <div className='flex items-center gap-2'>
            <h2 className='text-lg font-extralight'>Total Expired</h2>
            <div className='w-4 h-[1.8px] bg-black-100' />
            <h1 className='font-semibold text-xl'>4</h1>
          </div>
        </div>
        <div className='flex items-center gap-2 mb-4'>
          <div
            className={`h-[32px] w-[32px] flex items-center justify-center rounded-full bg-black-100`}
          >
            <CalendarDays color='white' />
          </div>
          <div className='flex items-center gap-2'>
            <h2 className='text-lg font-extralight'>Total Upcoming</h2>
            <div className='w-4 h-[1.8px] bg-black-100' />
            <h1 className='font-semibold text-xl'>4</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CPDOverview
