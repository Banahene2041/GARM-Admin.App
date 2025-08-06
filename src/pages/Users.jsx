import PageTitle from "@/components/Dashboard/PageTitle"
import { File, FileSliders, Plus, X } from "lucide-react"
import React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Members from "@/components/Dashboard/Members/Members"
import { useAppContext } from "@/context/AppContext"
import { ErrorMessage, Field, Form, Formik } from "formik"
import CustomMiddleModal from "@/components/ui/CustomMiddleModal"
import { newMemberSchema } from "@/schema"
import PhoneInput from "react-phone-input-2"
import { addMemberValue } from "@/schema/initialValues"

const Users = () => {
  const { setActiveMiddleModal } = useAppContext()
  const subTitleLinks = [{ label: "home", url: "/dashboard/home" }]

  return (
    <section className='pt-[2rem] md:pt-[2rem] px-[15px] lg:px-[15px] lg:pl-[24px]'>
      <div className='flex items-center justify-between'>
        <PageTitle
          title={"Members"}
          subTitleLinks={subTitleLinks}
          subTitle={"Members"}
        />
        <div className='flex items-center gap-1 text-white'>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className='p-2 bg-custom-blue-100 hover:bg-custom-blue-200 rounded-[3px] cursor-pointer'>
                <File size={15} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Import</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className='p-2 bg-custom-blue-100 hover:bg-custom-blue-200 rounded-[3px] cursor-pointer'>
                <FileSliders size={15} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Export</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className='p-2 bg-custom-blue-100 hover:bg-custom-blue-200 rounded-[3px] cursor-pointer'
                onClick={() => {
                  setActiveMiddleModal("Add Member")
                }}
              >
                <Plus size={15} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add Member</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <main className='mt-[30px]'>
        <Members />
      </main>

      {/* Add New Member */}
      <CustomMiddleModal
        modalId={"Add Member"}
        closeModalOutside={false}
        className={`bg-white p-3 pb-6 w-[90%] max-w-[500px] max-h-[95%] overflow-y-auto rounded-sm`}
      >
        <div className='flex items-center justify-between mb-2'>
          <h1 className='font-semibold text-lg'>Add New Member</h1>
          <button
            className='text-gray-500 hover:text-gay-800 cursor-pointer'
            onClick={() => setActiveMiddleModal(false)}
          >
            <X size={22} />
          </button>
        </div>
        {/* content */}
        <div className='border border-solid mt-2 border-[#D9DCF9] p-2 py-4 md:p-4'>
          <Formik
            validationSchema={newMemberSchema}
            initialValues={addMemberValue}
            onSubmit={(values, actions) => {
              console.log(values)
              actions.resetForm()
            }}
          >
            {({ touched, errors, values, setFieldValue }) => (
              <Form>
                <div className='mt-1 flex flex-col'>
                  <label
                    htmlFor='fullName'
                    className='text-[12px] font-medium mb-1'
                  >
                    Name<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    name='fullName'
                    type='text'
                    id='fullName'
                    className={`font-extralight w-full border p-2 rounded-[5px] outline-none ${
                      errors.fullName && touched.fullName
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                    placeholder='Enter member name'
                  />
                  <ErrorMessage
                    name='fullName'
                    component={"div"}
                    className='text-red-500 text-[12px]'
                  />
                </div>
                <div className='mt-2 flex flex-col'>
                  <label
                    htmlFor='email'
                    className='text-[12px] font-medium mb-1'
                  >
                    Email<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    name='email'
                    type='email'
                    id='email'
                    className={`font-extralight w-full border p-2 rounded-radius-100 outline-none ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                    placeholder='Enter a member email'
                  />
                  <ErrorMessage
                    name='email'
                    component={"div"}
                    className='text-red-500 text-[12px]'
                  />
                </div>
                <div className='mt-2 flex flex-col'>
                  <label
                    htmlFor='password'
                    className='text-[12px] font-medium mb-1'
                  >
                    Password<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    name='password'
                    type='password'
                    id='password'
                    className={`font-extralight w-full border p-2 rounded-radius-100 outline-none ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                    placeholder='Enter member password'
                  />
                  <ErrorMessage
                    name='password'
                    component={"div"}
                    className='text-red-500 text-[12px]'
                  />
                </div>

                {/* gender */}
                <div className='flex-1 flex flex-col mt-2'>
                  <label
                    htmlFor='gender'
                    className='text-[12px] font-medium mb-1'
                  >
                    Gender<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    as='select'
                    id='gender'
                    name='gender'
                    className={`outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] bg-transparent px-2 border-border-gray-100 text-input-text-100 md:text-[14px] ${
                      errors.gender && touched.gender
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                  >
                    <option value='' disabled>
                      Select your gender
                    </option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </Field>
                  <ErrorMessage
                    name='gender'
                    component={"div"}
                    className='text-red-500 text-[12px]'
                  />
                </div>

                {/* role */}
                <div className='flex-1 flex flex-col mt-2'>
                  <label
                    htmlFor='role'
                    className='text-[12px] font-medium mb-1'
                  >
                    Role<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    as='select'
                    id='role'
                    name='role'
                    className={`outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] bg-transparent px-2 border-border-gray-100 text-input-text-100 md:text-[14px] ${
                      errors.role && touched.role
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                  >
                    <option value='' disabled>
                      Select member role
                    </option>
                    <option value='intern'>Intern</option>
                    <option value='student'>Student</option>
                    <option value='licensed'>Licensed</option>
                  </Field>
                  <ErrorMessage
                    name='role'
                    component={"div"}
                    className='text-red-500 text-[12px]'
                  />
                </div>

                {/* contact */}
                <div className='flex-1 flex flex-col mt-2'>
                  <label
                    htmlFor='contact'
                    className='text-[12px] font-medium mb-1'
                  >
                    Contact
                  </label>
                  <PhoneInput
                    country={"gh"}
                    value={values.contact}
                    onChange={(val) => setFieldValue("contact", val)}
                    buttonStyle={{ color: "black" }}
                    inputProps={{
                      name: "phoneNumber",
                    }}
                    enableSearch
                    autocompleteSearch
                    searchClass='bg-red-500'
                    inputStyle={{
                      width: "100%",
                      borderRadius: "6px",
                      border: "1.6px solid #D9DCF9",
                      outline: "none",
                      height: "40px",
                      padding: "0 48px",
                      marginTop: "4px",
                    }}
                  />
                </div>
                <div className='flex-1 flex flex-col mt-2'>
                  <label
                    htmlFor='birthDate'
                    className='text-[12px] font-medium mb-1'
                  >
                    Date of Birth
                  </label>
                  <Field
                    type='date'
                    name='birthDate'
                    className='outline-none w-[100%] text-start bg-transparent placeholder:font-light py-[8px] h-[40px] rounded-radius-100 border-[1.6px] px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                    placeholder='Enter Your Birth Date'
                  />
                </div>
                {/* role */}
                <div className='flex-1 flex flex-col mt-2'>
                  <label
                    htmlFor='portfolio'
                    className='text-[12px] font-medium mb-1'
                  >
                    Portfolio<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    as='select'
                    id='portfolio'
                    name='portfolio'
                    className={`outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] bg-transparent px-2 border-border-gray-100 text-input-text-100 md:text-[14px] ${
                      errors.portfolio && touched.portfolio
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                  >
                    <option value='' disabled>
                      Select member portfolio
                    </option>
                    <option value='member'>Member</option>
                    <option value='executive'>Executive</option>
                  </Field>
                  <ErrorMessage
                    name='portfolio'
                    component={"div"}
                    className='text-red-500 text-[12px]'
                  />
                </div>
                <div className='w-full'>
                  <button
                    type='submit'
                    className='mt-6 flex items-center justify-center gap-1 w-full py-[10px] rounded-[5px] text-white bg-[#5A6FA9] cursor-pointer'
                  >
                    <span className='text-[13px]'>Add Member</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </CustomMiddleModal>
    </section>
  )
}

export default Users
