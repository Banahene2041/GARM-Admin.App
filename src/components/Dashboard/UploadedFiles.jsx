import React, {} from "react"
import { Link } from "react-router-dom"
import UploadedFilesTable from "./UploadedFilesTable"

const UploadedFIles = () => {
  return (
    <div className='mt-8 shadow-subtle bg-white p-[24px] rounded-radius-200'>
      {/* Upload Files */}
      <div className='flex flex-col-reverse md:flex-row mt-5 md:items-center justify-between'>
        <h1 className='font-semibold mt-4 md:mt-0 text-[16px]'>
          Uploaded Files
        </h1>
        <Link
          to={"/dashboard/publications"}
          className='text-custom-blue-100 hover:text-custom-blue-200 text-[13.5px] font-medium'
        >
          See All
        </Link>
      </div>

      {/* uploaded table */}
      <UploadedFilesTable />
    </div>
  )
}

export default UploadedFIles
