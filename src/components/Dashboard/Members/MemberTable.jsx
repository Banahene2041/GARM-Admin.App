import React from "react"
import { SquarePen, Trash, TriangleAlert, View, X,} from "lucide-react"
import { membersList } from "@/data"
import CustomMiddleModal from "@/components/ui/CustomMiddleModal"
import { useAppContext } from "@/context/AppContext"
import { Link } from "react-router-dom"

const MemberTable = () => {
  const { setActiveMiddleModal } = useAppContext()

  return (
    <>
      <div className='overflow-x-auto mt-6'>
        <table className='min-w-full table-auto border border-gray-200 shadow-sm'>
          <thead className='bg-gray-100 text-left text-sm text-gray-700 uppercase'>
            <tr>
              <th className='p-3 text-nowrap'>#</th>
              <th className='p-3 text-nowrap'>Member ID</th>
              <th className='p-3 text-nowrap'>Name</th>
              <th className='p-3 text-nowrap'>Email</th>
              <th className='p-3 text-nowrap'>Gender</th>
              <th className='p-3 text-nowrap'>CPD Points</th>
              <th className='p-3 text-nowrap'>Region</th>
              <th className='p-3 text-nowrap'>Roles</th>
              <th className='p-3 text-nowrap'>Actions</th>
            </tr>
          </thead>
          <tbody className='text-sm text-gray-800'>
            {membersList?.length > 0 ? (
              membersList.map((member) => (
                <tr key={member.memberId} className='border-t'>
                  <td className='p-3'>
                    <div className='w-14 h-14 rounded-full'>
                      <img
                        src={member.profileImage}
                        className='w-full h-full rounded-full'
                        alt=''
                      />
                    </div>
                  </td>
                  <td className='p-3 font-medium'>{member.memberId}</td>
                  <td className='p-3'>{member.name}</td>
                  <td className='p-3'>{member.email}</td>
                  <td className='p-3'>{member.gender}</td>
                  <td className='p-3'>{member.cpdPoints}</td>
                  <td className='p-3'>{member.region}</td>
                  <td className='p-3'>{member.roles}</td>
                  <td className='p-3 text-center'>
                    <div className='flex items-center gap-2 text-white'>
                      <button
                        className='bg-red-600 hover:bg-red-700 p-2 rounded-sm cursor-pointer'
                        onClick={() => {
                          setActiveMiddleModal("Delete Member")
                        }}
                      >
                        <Trash size={15} />
                      </button>
                      <Link
                        to={`/dashboard/members/${member.memberId}/personalInfo`}
                        className='bg-blue-600 hover:bg-blue-700 p-2 rounded-sm'
                      >
                        <SquarePen size={15} />
                      </Link>
                      <Link
                        to={`/dashboard/members/${member.memberId}/personalInfo`}
                        className='bg-green-600 hover:bg-green-700 p-2 rounded-sm'
                      >
                        <View size={15} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className='p-4 text-center text-gray-500' colSpan={10}>
                  No CPD activities recorded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <CustomMiddleModal
        modalId={"Delete Member"}
        closeModalOutside={true}
        className={`bg-white p-4 pb-6 w-[90%] max-w-[450px] rounded-sm`}
      >
        <div className='flex items-center justify-end'>
          <button
            className='text-gray-500 hover:text-red-400 cursor-pointer'
            onClick={() => setActiveMiddleModal(false)}
          >
            <X size={22} />
          </button>
        </div>
        <div className='flex items-center justify-center my-5'>
          <TriangleAlert className='text-red-400' size={50} />
        </div>
        <h4 className='text-center text-2xl'>
          Are you sure you want to Delete this member
        </h4>
        <div className='flex items-center justify-center gap-2 mt-5'>
          <button className='w-[6rem] py-2 rounded-sm bg-red-500 hover:bg-red-600 text-white cursor-pointer'>
            Yes
          </button>
          <button
            className='w-[6rem] py-2 rounded-sm bg-gray-400 text-white hover:bg-gray-600 cursor-pointer'
            onClick={() => setActiveMiddleModal(false)}
          >
            Cancel
          </button>
        </div>
      </CustomMiddleModal>
    </>
  )
}
export default MemberTable
