import React from "react"
import { Link } from "react-router-dom"
import CustomPieChart from "./CustomPieChart"

const data = [
  { name: "Students", value: 38 },
  { name: "Intern", value: 2 },
  { name: "Licensed", value: 14 },
]

const UsersChart = () => {
  return (
    <div className='shadow-subtle w-full h-full justify-between bg-white text-black-100 py-[24px] rounded-radius-200'>
      <div className='pb-[14px] border-b-[1px] border-b-border-gray-100 relative px-[24px] flex items-center justify-between'>
        <div>
          <p className='text-[16px]'>Membership</p>
          <p className='text-custom-lightGray-100 text-[10px]'>20 Members</p>
        </div>
        <Link
          to='/dashboard/users'
          className='text-[12px] font-semibold text-custom-lightGray-100 w-[4rem] py-[6px] rounded-[5px] text-center bg-waterColor hover:text-custom-blue-100 hover:bg-transparent-100'
        >
          View
        </Link>
        <div className='absolute top-0 left-0 z-0 h-[25px] bg-custom-blue-100 w-[2.5px] rounded-l-0 rounded-[10px]' />
      </div>
      <CustomPieChart data={data} />
    </div>
  )
}

export default UsersChart
