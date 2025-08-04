import CustomInput from "@/components/Dashboard/CustomInputs/CustomInput"
import { resetpasswordSchema } from "@/schema"
import { Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"

const ResetPassword = () => {
  const navigate = useNavigate()

  const handleResetPassword = async (values, actions) => {
    console.log(values)
    navigate("/")
    actions.resetForm()
  }

  return (
    <div className='w-full flex flex-col'>
      <p className='text-[1.4rem] lg:text-[1.6rem] mb-4 text-black-100 font-semibold'>
        Reset Password
      </p>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={resetpasswordSchema}
        onSubmit={handleResetPassword}
      >
        {() => (
          <Form className='w-full'>
            <CustomInput
              type='password'
              name='password'
              label='Password'
              placeholder='Enter Password'
              inputClass={`border border-input-100 text-input-text-100 text-[16px] md:text-[14px] p-2 rounded-[6px] focus:shadow-inputSuccessShadow focus:border-custom-green-100 focus:outline-none`}
              wrapperClassname={`flex flex-col gap-1`}
              labelClass={`text-[14px] text-black-100 font-medium`}
            />
            <CustomInput
              type='password'
              name='confirmPassword'
              label='Confirm Password'
              placeholder='Confirm Password'
              inputClass={`border border-input-100 text-input-text-100 text-[16px] md:text-[14px] p-2 rounded-[6px] focus:shadow-inputSuccessShadow focus:border-custom-green-100 focus:outline-none`}
              wrapperClassname={`flex flex-col gap-1 mt-4`}
              labelClass={`text-[14px] text-black-100 font-medium`}
            />
            <div className='flex items-center justify-center mt-8'>
              <button
                type='submit'
                className='bg-custom-green-100 hover:bg-custom-green-200 cursor-pointer w-full text-white p-spacing-100 rounded-radius-100 disabled:cursor-not-allowed'
              >
                Reset Password
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ResetPassword
