import React, { useState } from 'react'
import MemberTable from './MemberTable'
import PaginationContainer from '../PaginationContainer'
import FilterSelect from '../FilterSelect'
import CustomOverviewCard from '../CustomOverviewCard'
import { Copyright, NotebookPen, UserRoundSearch } from 'lucide-react'

const Members = () => {
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const [totalEntries, setTotalEntries] = useState(100)

  // Calculate start and end entries
  const startEntry = totalEntries === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(startEntry + limit - 1, totalEntries)
  const totalPages = Math.ceil(totalEntries / limit)


  return (
    <>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[25px]'>
        <CustomOverviewCard
          label='Students'
          value={30}
          icon={<NotebookPen  size={20} />}
          highlight='lightBlue'
        />
        <CustomOverviewCard
          label='Intern'
          value={16}
          icon={<UserRoundSearch size={20} />}
          highlight='blue'
        />
        <CustomOverviewCard
          label='Licensed'
          value='40'
          icon={<Copyright size={20} />}
          highlight='lightBlue'
        />
      </div>
      <div className='mt-8 shadow-subtle bg-white p-[24px] rounded-radius-200'>
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          <FilterSelect limit={limit} setLimit={setLimit} setPage={setPage} />
          <div className='w-full md:max-w-[300px] flex justify-end mt-5 md:mt-0'>
            <input
              type='text'
              placeholder='Search member'
              className='outline-none border border-border-gray-200 w-full p-2 rounded-sm'
            />
          </div>
        </div>

        {/* members table*/}
        <MemberTable />

        <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
          <p className='text-sm text-gray-600'>
            Showing {startEntry} to {endEntry} of {totalEntries} entries
          </p>

          <PaginationContainer
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      </div>
    </>
  )
}

export default Members