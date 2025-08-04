import { memberPublications } from "@/data"
import { Eye, SquarePen, Trash2 } from "lucide-react"
import React from "react"

const UploadedFilesTable = () => {
  const statusColor = {
    Rejected: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Draft: "bg-gray-100 text-gray-700",
    Approved: "bg-green-100 text-green-700",
  }

  return (
    <div className='overflow-x-auto mt-5'>
      <table className='w-full text-sm'>
        <thead className='border-b-[1.6px] border-b-[#EBEDF3] bg-gray-100 text-left text-sm text-gray-700 uppercase w-full'>
          <tr>
            <th className='p-3 text-nowrap'>#</th>
            <th className='p-3 text-nowrap'>Title</th>
            <th className='p-3 text-nowrap'>Category</th>
            <th className='p-3 text-nowrap'>Published Date</th>
            <th className='p-3 text-nowrap'>Status</th>
            <th className='p-3 text-nowrap'>Action</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {memberPublications?.length > 0 ? (
            memberPublications.map((publication, index) => (
              <tr
                key={index}
                className='border-b last:border-b-0 border-gray-200 hover:bg-gray-50 transition'
              >
                <td className='p-2 px-4 text-[12px] py-[12px] md:text-[13px] font-normal text-nowrap'>
                  {index + 1}
                </td>
                <td className='p-2 px-4 text-[12px] py-[12px] md:text-[13px] font-normal text-nowrap'>
                  {publication.title}
                </td>
                <td className='p-2 px-4 text-[12px] py-[12px] md:text-[13px] font-normal text-nowrap'>
                  {publication.category}
                </td>
                <td className='p-2 px-4 text-[12px] py-[12px] md:text-[13px] font-normal text-nowrap'>
                  {publication.createdAt}
                </td>
                <td
                  className={`p-2 px-4 text-[12px] py-[12px] md:text-[13px] font-normal text-nowrap`}
                >
                  <div
                    className={`w-[4rem] text-center py-[6px] rounded text-xs font-semibold ${
                      statusColor[publication.status]
                    }  `}
                  >
                    {publication.status}
                  </div>
                </td>
                <td className='p-3 text-nowrap'>
                  <div className='flex items-center gap-2 text-white'>
                    <button className='bg-red-600 hover:bg-red-700 p-2 rounded-sm'>
                      <Trash2 size={16} />
                    </button>
                    <button className='bg-blue-600 hover:bg-blue-700 p-2 rounded-sm'>
                      <SquarePen size={16} />
                    </button>
                    <button className='bg-green-600 hover:bg-green-700 p-2 rounded-sm'>
                      <Eye size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className='p-4 text-center text-gray-500' colSpan={10}>
                No Outstanding data recorded yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UploadedFilesTable
