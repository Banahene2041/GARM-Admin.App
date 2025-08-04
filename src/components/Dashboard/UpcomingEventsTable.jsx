import React from "react"
import { upcomingEvent } from "@/data"
import { SquarePen, Trash, View } from "lucide-react"

const UpcomingEventsTable = () => {
  const statusColor = {
    Open: "text-[#3CC4C0] bg-[#C9F7F5]",
    "Limited Spots": "text-[#FFB515] bg-[#FFF4DE]",
  }

  const eventTypeColor = {
    Workshop: "bg-[#FEDDDD]",
    Webinar: "bg-[#D5D0FA]",
    Conference: "bg-[#D0FAD0]",
  }

  return (
    <div className='overflow-x-auto mt-5'>
      <table className='w-full text-sm'>
        <thead className='border-b-[1.6px] border-b-[#EBEDF3] uppercase w-full'>
          <tr className='text-left'>
            <th className='p-2 px-4 text-nowrap text-[11px] md:text-[11.7px] font-semibold text-[#B5B5C3]'>
              <div className='w-6 h-6 rounded-sm bg-[#EBEDF3]'></div>
            </th>
            <th className='p-2 px-4 text-nowrap text-[11px] md:text-[11.7px] font-semibold text-[#B5B5C3]'>
              Event
            </th>
            <th className='p-2 px-4 text-nowrap text-[11px] md:text-[11.7px] font-semibold text-[#B5B5C3]'>
              Type
            </th>
            <th className='p-2 px-4 text-nowrap text-[11px] md:text-[11.7px] font-semibold text-[#B5B5C3]'>
              Date
            </th>
            <th className='p-2 px-4 text-nowrap text-[11px] md:text-[11.7px] font-semibold text-[#B5B5C3]'>
              CPD points
            </th>
            <th className='p-2 px-4 text-nowrap text-[11px] md:text-[11.7px] font-semibold text-[#B5B5C3]'>
              Status
            </th>
            <th className='p-2 px-4 text-nowrap text-[11px] md:text-[11.7px] font-semibold text-[#B5B5C3]'>
              Action
            </th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {upcomingEvent.map((event, index) => (
            <tr
              key={index}
              className='border-b last:border-b-0 border-gray-200 hover:bg-gray-50 transition'
            >
              <td className='p-2 px-4 text-[12px] py-[14px] md:text-[13px] font-normal text-nowrap'>
                <div
                  className={`h-[30px] w-[30px] p-1 flex items-center justify-center rounded-full ${
                    eventTypeColor[event.type]
                  }`}
                >
                  <img src={event.image} alt={event.type} />
                </div>
              </td>
              <td className='p-2 px-4 text-[12px] py-[14px] md:text-[13px] font-normal text-nowrap'>
                {event.event}
              </td>
              <td className='p-2 px-4 text-[12px] py-[14px] md:text-[13px] font-normal text-nowrap'>
                {event.type}
              </td>
              <td className='p-2 px-4 text-[12px] py-[14px] md:text-[13px] font-normal text-nowrap'>
                {event.date}
              </td>
              <td className='p-2 px-4 text-[12px] py-[14px] md:text-[13px] font-normal text-nowrap'>
                {event.CPDPoints}
              </td>
              <td className='p-2 px-4 text-[12px] py-[14px] text-nowrap'>
                <span
                  className={`${
                    statusColor[event.status]
                  } p-1 px-[6px] rounded-[5px]`}
                >
                  {event.status}
                </span>
              </td>
              <td className='p-2 px-4 text-nowrap'>
                <div className='flex items-center gap-2 text-white'>
                  <button className='bg-red-600 hover:bg-red-700 p-2 rounded-sm'>
                    <Trash size={15} />
                  </button>
                  <button className='bg-blue-600 hover:bg-blue-700 p-2 rounded-sm'>
                    <SquarePen size={15} />
                  </button>
                  <button className='bg-green-600 hover:bg-green-700 p-2 rounded-sm'>
                    <View size={15} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UpcomingEventsTable
