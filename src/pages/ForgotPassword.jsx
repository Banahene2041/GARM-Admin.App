import CustomInput from "@/components/Dashboard/CustomInputs/CustomInput"
import { forgotPasswordSchema } from "@/schema"
import { Form, Formik } from "formik"
import React from "react"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  const handleForgotPassword = async (values, actions) => {
    console.log(values)
    actions.resetForm()
  }

  return (
    <div className='w-full flex flex-col'>
      <p className='text-[1.4rem] lg:text-[1.6rem] mb-4 text-black-100 font-semibold'>
        Forgot Password
      </p>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleForgotPassword}
      >
        {() => (
          <Form className='w-full'>
            <CustomInput
              type='email'
              name='email'
              label='Email'
              placeholder='Enter your email'
              inputClass={`border border-input-100 text-input-text-100 text-[16px] md:text-[14px] p-2 rounded-[6px] focus:shadow-inputSuccessShadow focus:border-custom-green-100 focus:outline-none`}
              wrapperClassname={`flex flex-col gap-1`}
              labelClass={`text-[14px] text-black-100 font-medium`}
            />
            <div className='flex items-center justify-center mt-6'>
              <button
                type='submit'
                className='bg-custom-green-100 hover:bg-custom-green-200 w-full cursor-pointer text-white p-spacing-100 rounded-radius-100'
              >
                Send Password Reset Link
              </button>
            </div>
            <div className='mt-6'>
              <p className='text-center'>
                <Link
                  to='/'
                  className='text-custom-green-100 hover:text-custom-green-200'
                >
                  Back to Login
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ForgotPassword
