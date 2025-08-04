import React from "react"
import { Link } from "react-router-dom"
import UpcomingEventsTable from "./UpcomingEventsTable"

const UpcomingEvents = () => {
  return (
    <section className='bg-white mt-6 rounded-radius-200 shadow-subtle p-4 px-4 md:px-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[15px] font-semibold'>Upcoming Events</h1>
        <Link
          to={"/dashboard/events"}
          className='text-custom-blue-100 hover:text-custom-blue-200 text-[13.5px] font-medium'
        >
          See All
        </Link>
      </div>
      <UpcomingEventsTable />
    </section>
  )
}

export default UpcomingEvents
