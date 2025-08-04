import React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const CustomPieChart = ({ data }) => {
  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0)

  const COLORS = ["#023E8A", "#ffa21d", "#3ec9d6"]

  return (
    <div className='flex flex-col items-center gap-1 mt-2 px-2'>
      <div className='w-full md:w-[50%] h-52 relative'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={0}
              outerRadius={70}
              paddingAngle={3}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <p
            className={`text-sm ${
              totalValue < 1 ? "text-red-500" : "text-white"
            }`}
          >
            Members
          </p>
          <p
            className={`text-xl font-bold ${
              totalValue < 1 ? "text-red-500" : "text-white"
            }`}
          >
            {totalValue}
          </p>
        </div>
      </div>

      <ul className='md:mt-0 space-y-2 text-sm text-gray-700'>
        {data.map((point, index) => (
          <li className='flex items-center gap-1' key={index}>
            <div
              className={`h-[8px] w-[8px] rounded-full`}
              style={{ backgroundColor: COLORS[index] }}
            />
            <span className='text-[12px] font-medium'>
              <span className="font-bold text-[13px]">{point.name}</span>
              <span className='ml-1 font-semibold'>({point.value} total)</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomPieChart
