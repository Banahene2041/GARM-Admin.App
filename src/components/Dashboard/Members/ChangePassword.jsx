import React from "react"

const ChangePassword = () => {
  return (
    <div className='shadow-subtle bg-white rounded-radius-200 py-[24px] text-[0.875rem]'>
      <div className='pb-[14px] relative border-b-[1px] border-b-border-gray-100 px-[24px] flex items-center justify-between'>
        <div>
          <p className='text-[16px] font-semibold'>Password & Security</p>
          <p className='text-custom-lightGray-100 text-[10px]'>
            Credentials and account protection
          </p>
        </div>
        <div className='absolute top-0 left-0 z-0 h-[25px] bg-custom-blue-100 w-[2.5px] rounded-l-0 rounded-[10px]' />
      </div>

      {/* old password and new password */}
      <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 px-[20px] md:px-[24px]'>
        {/* fullName */}
        <div className='flex-1 flex flex-col'>
          <label htmlFor='currentPassword' className='font-semibold'>
            Current Password<span className='text-red-500'>*</span>
          </label>
          <input
            type='password'
            id='currentPassword'
            className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
            placeholder='Enter Current Password'
          />
        </div>
        <div className='flex-1 flex flex-col'>
          <label htmlFor='newPassword' className='font-semibold'>
            New Password<span className='text-red-500'>*</span>
          </label>
          <input
            type='password'
            id='newPassword'
            className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
            placeholder='Enter New Password'
          />
        </div>
        <div className='flex-1 flex flex-col'>
          <label htmlFor='confirmPassword' className='font-semibold'>
            Re-type New Password<span className='text-red-500'>*</span>
          </label>
          <input
            type='password'
            id='confirmPassword'
            className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
            placeholder='Enter Re-typed New Password'
          />
        </div>
      </div>
      <div className='mt-10 flex justify-end px-[20px] md:px-[24px]'>
        <button className='flex text-[13px] py-[10px] text-white px-3 rounded-radius-100 items-center gap-1 mt-4 md:mt-0 bg-gradient-to-br from-custom-blue-100 to-custom-blue-200 hover:bg-gradient-to-br hover:from-[#023E8A] hover:to-[#023E8A]'>
          Update Password
        </button>
      </div>
    </div>
  )
}

export default ChangePassword
