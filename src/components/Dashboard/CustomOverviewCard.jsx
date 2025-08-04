import React from "react"

const CustomOverviewCard = ({ label, value, icon, highlight = "blue" }) => {
  const highlightColors = {
    blue: "bg-custom-blue-100",
    orange: "bg-custom-orange-100",
    lightBlue: "bg-custom-lightBlue-100",
  }

  return (
    <>
      <div className='flex items-center shadow-subtle justify-between bg-white p-[24px] md:px-[14px] xl:p-[24px] rounded-radius-200'>
        <div className='flex items-center gap-[15px] md:gap-[8px] xl:gap-[15px]'>
          <div
            className={`h-[42px] w-[42px] flex items-center text-white justify-center rounded-[5px] ${highlightColors[highlight]} p-[0.35rem]`}
          >
            {icon}
          </div>
          <div>
            <p className='text-custom-lightGray-100 text-[11.5px]'>Total</p>
            <h2 className='text-[15px] font-semibold'>{label}</h2>
          </div>
        </div>
        <p className='text-custom-blue-100 text-[20px] font-semibold'>
          {value}
        </p>
      </div>
    </>
  )
}

export default CustomOverviewCard
