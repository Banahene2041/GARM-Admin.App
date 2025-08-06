import React from "react"

const FinancialCards = ({
  label,
  value,
  highlight = "customBlue",
  icon,
  labelColor,
}) => {
  const highlightColors = {
    blue: "bg-custom-lightBlue-100",
    orange: "bg-custom-orange-100",
    green: "bg-custom-green-100",
    customBlue: "bg-custom-blue-100",
  }

  return (
    <div className='flex items-center shadow-subtle justify-between bg-white p-[24px] rounded-radius-200'>
      <div className=''>
        <h2
          className={`text-[15px] mb-[20px] font-semibold ${
            labelColor ? "text-red-500" : "text-black-100"
          } `}
        >
          {label}
        </h2>
        <p
          className={`text-[28px] font-semibold ${
            labelColor ? "text-red-500" : "text-custom-blue-100"
          }`}
        >
          {value}
        </p>
      </div>
      <div
        className={`h-[45px] w-[45px] text-white flex items-center justify-center rounded-[5px] ${highlightColors[highlight]} p-[0.35rem]`}
      >
        {icon}
      </div>
    </div>
  )
}

export default FinancialCards
