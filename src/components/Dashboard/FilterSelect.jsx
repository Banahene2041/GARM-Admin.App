import React from "react"

const FilterSelect = ({ limit, setLimit, setPage }) => {
  return (
    <div className='flex items-center  gap-2'>
      <select
        name='filter'
        id='filter'
        value={limit}
        onChange={(e) => {
          setLimit(parseInt(e.target.value))
          setPage(1)
        }}
        className='border border-border-gray-200 h-[40px] bg-transparent px-4 rounded-sm'
      >
        {[10, 15, 20, 25, 50].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <p>entries per page</p>
    </div>
  )
}

export default FilterSelect
