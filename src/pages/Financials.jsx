import FinancialCards from "@/components/Dashboard/Financials/FinancialCards"
import PageTitle from "@/components/Dashboard/PageTitle"
import {
  BadgeCent,
  CalendarDays,
  CalendarX,
  FileSliders,
  Plus,
  WalletCards,
  File,
  X,
} from "lucide-react"
import React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useAppContext } from "@/context/AppContext"
import { ErrorMessage, Field, Form, Formik } from "formik"
import CustomMiddleModal from "@/components/ui/CustomMiddleModal"

const Financials = () => {
  const { setActiveMiddleModal } = useAppContext()
  const subTitleLinks = [{ label: "home", url: "/dashboard/home" }]

  return (
    <section className='pt-[2rem] md:pt-[2rem] px-[15px] lg:px-[15px] lg:pl-[24px]'>
      <PageTitle
        title={"Member Detail"}
        subTitleLinks={subTitleLinks}
        subTitle={"Member Detail"}
      />
      <div className='mt-[30px] flex flex-col xl:flex-row items-start gap-[24px]'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[15px] md:gap-[25px]'>
          <FinancialCards
            label='Total Income'
            value={50}
            highlight='customBlue'
            icon={<WalletCards size={20} />}
          />
          <FinancialCards
            label='Total Expense'
            value={20}
            highlight='orange'
            icon={<BadgeCent size={20} />}
          />
          <FinancialCards
            label='Outstanding Dues'
            value='20-14-2024'
            labelColor={true}
            highlight='blue'
            icon={<CalendarX color='red' size={20} />}
          />
          <FinancialCards
            label='Last Activity Date'
            value='15 July 2025'
            highlight='green'
            icon={<CalendarDays size={20} />}
          />
        </div>
      </div>

      <div className='flex items-center justify-end mt-[30px] gap-1 text-white'>
        {/* add new Finance */}
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
                setActiveMiddleModal("Add New Finance")
              }}
            >
              <Plus size={15} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add Finance</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Finance Table */}

      {/* Add New Finance */}
      <CustomMiddleModal
        modalId={"Add New Finance"}
        closeModalOutside={false}
        className={`bg-white p-3 pb-6 w-[90%] max-w-[500px] max-h-[95%] overflow-y-auto rounded-sm`}
      >
        <div className='flex items-center justify-between mb-2'>
          <h1 className='font-semibold text-lg'>Add New Finance</h1>
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
            validationSchema={{}}
            initialValues={{}}
            onSubmit={(values, actions) => {
              console.log(values)
              actions.resetForm()
            }}
          >
            {({ touched, errors }) => (
              <Form>
                <div className='mt-1 flex flex-col'>
                  <label
                    htmlFor='title'
                    className='text-[13px] font-semibold mb-1'
                  >
                    Title<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    name='title'
                    type='text'
                    id='title'
                    className={`font-extralight w-full border p-2 rounded-[5px] outline-none ${
                      errors.title && touched.title
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                    placeholder='Enter title'
                  />
                  <ErrorMessage
                    name='title'
                    component={"div"}
                    className='text-red-500 text-[12px]'
                  />
                </div>
                {/* amount */}
                <div className='mt-2 flex flex-col'>
                  <label
                    htmlFor='amount'
                    className='text-[13px] font-semibold mb-1'
                  >
                    Amount<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    name='amount'
                    type='number'
                    id='amount'
                    className={`font-extralight w-full border p-2 rounded-radius-100 outline-none ${
                      errors.amount && touched.amount
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                    placeholder='Enter amount'
                  />
                  <ErrorMessage
                    name='amount'
                    component={"div"}
                    className='text-red-500 text-[12px]'
                  />
                </div>
                {/* Type */}
                <div className='flex-1 flex flex-col mt-2'>
                  <label
                    htmlFor='type'
                    className='text-[13px] font-semibold mb-1'
                  >
                    Type<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    as='select'
                    id='type'
                    name='type'
                    className={`outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] bg-transparent px-2 border-border-gray-100 text-input-text-100 md:text-[14px] ${
                      errors.type && touched.type
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                  >
                    <option value='' disabled>
                      Select Type
                    </option>
                    <option value='Income'>Income</option>
                    <option value='Expense'>Expense</option>
                  </Field>
                  <ErrorMessage
                    name='type'
                    component={"div"}
                    className='text-red-500 text-[12px]'
                  />
                </div>

                {/* category */}
                <div className='flex-1 flex flex-col mt-2'>
                  <label
                    htmlFor='category'
                    className='text-[13px] font-semibold mb-1'
                  >
                    Category<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    as='select'
                    id='category'
                    name='category'
                    className={`outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] bg-transparent px-2 border-border-gray-100 text-input-text-100 md:text-[14px] ${
                      errors.category && touched.category
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                  >
                    <option value='' disabled>
                      Select Category
                    </option>
                    <option value='Membership Dues'>Membership Dues</option>
                    <option value='Event Revenue'>Event Revenue</option>
                    <option value='Sponsorship'>Sponsorship</option>
                    <option value='Donations'>Donations</option>
                    <option value='Salaries'>Salaries</option>
                    <option value='Utilities'>Utilities</option>
                    <option value='Equipment'>Equipment</option>
                    <option value='Training'>Training</option>
                    <option value='Other'>Other</option>
                  </Field>
                  <ErrorMessage
                    name='category'
                    component='div'
                    className='text-red-500 text-sm'
                  />
                </div>

                {/* payment method */}
                <div className='flex-1 flex flex-col mt-2'>
                  <label
                    htmlFor='paymentMethod'
                    className='text-[13px] font-semibold mb-1'
                  >
                    Payment Method<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    as='select'
                    id='paymentMethod'
                    name='paymentMethod'
                    className={`outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] bg-transparent px-2 border-border-gray-100 text-input-text-100 md:text-[14px] ${
                      errors.paymentMethod && touched.paymentMethod
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                  >
                    <option value='' disabled>
                      Select Method
                    </option>
                    <option value='Bank Transfer'>Bank Transfer</option>
                    <option value='Mobile Money'>Mobile Money</option>
                    <option value='Cash'>Cash</option>
                    <option value='Card'>Card</option>
                  </Field>
                  <ErrorMessage
                    name='paymentMethod'
                    component='div'
                    className='text-red-500 text-sm'
                  />
                </div>

                {/* Transaction Date */}
                <div className='mt-2 flex flex-col'>
                  <label
                    htmlFor='date'
                    className='text-[13px] font-semibold mb-1'
                  >
                    Transaction Date<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    name='date'
                    type='date'
                    id='date'
                    className={`font-extralight w-full border p-2 rounded-radius-100 outline-none ${
                      errors.date && touched.date
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                    placeholder='Enter transaction date'
                  />
                  <ErrorMessage
                    name='amount'
                    component={"div"}
                    className='text-red-500 text-[12px]'
                  />
                </div>

                {/* Due Date */}
                <div className='mt-2 flex flex-col'>
                  <label
                    htmlFor='dueDate'
                    className='text-[13px] font-semibold mb-1'
                  >
                    Due Date (optional for expenses)
                  </label>
                  <Field
                    name='dueDate'
                    type='date'
                    id='dueDate'
                    className={`font-extralight w-full border p-2 rounded-radius-100 outline-none ${
                      errors.dueDate && touched.dueDate
                        ? "border-red-500"
                        : "border-[#D9DCF9]"
                    }`}
                    placeholder='Enter due date'
                  />
                  <ErrorMessage
                    name='amount'
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

export default Financials
