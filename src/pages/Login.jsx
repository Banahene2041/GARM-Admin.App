import CustomInput from "@/components/Dashboard/CustomInputs/CustomInput"
import { loginSchema } from "../schema/index"
import { Form, Formik } from "formik"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha"

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

const Login = () => {
  const navigate = useNavigate()
  const [captchaValue, setCaptchaValue] = useState(null)

  const handleLogin = async (values) => {
    if (!captchaValue) {
      alert("Please verify you're not a robot")
      return
    }
    const data = {
      recaptchaToken: captchaValue,
      ...values,
    }
    console.log(data)
    navigate("/dashboard")
  }

  return (
    <div className='w-full flex flex-col'>
      <p className='text-[1.4rem] lg:text-[1.6rem] mb-4 text-black-100 font-semibold'>
        Login
      </p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {() => (
          <Form className='w-full'>
            <CustomInput
              type='email'
              name='email'
              label='Email'
              placeholder='Enter your email'
              inputClass={`border border-input-100 text-input-text-100 md:text-[16px] md:text-sm p-2 rounded-[6px] focus:shadow-inputSuccessShadow focus:border-custom-green-100 focus:outline-none`}
              wrapperClassname={`flex flex-col gap-1`}
              labelClass={`text-[14px] text-black-100 font-medium`}
            />
            <CustomInput
              type='password'
              name='password'
              label='Password'
              placeholder='Enter Password'
              inputClass={`border border-input-100 text-input-text-100 md:text-[16px] md:text-sm p-2 rounded-[6px] focus:shadow-inputSuccessShadow focus:border-custom-green-100 focus:outline-none`}
              wrapperClassname={`flex flex-col gap-1 mt-4`}
              labelClass={`text-[14px] text-black-100 font-medium`}
            />
            <div className='mt-3'>
              <Link
                to={"/forgot-password"}
                className='text-custom-green-100 hover:text-custom-green-200 font-medium'
              >
                Forgot Your Password?
              </Link>
            </div>

            <ReCAPTCHA
              sitekey={siteKey}
              onChange={(token) => setCaptchaValue(token)}
              className='my-4'
            />

            <div className='flex items-center justify-center mt-8'>
              <button
                type='submit'
                disabled={!captchaValue}
                className='bg-custom-green-100 hover:bg-custom-green-200 cursor-pointer w-full text-white p-spacing-100 rounded-radius-100 disabled:cursor-not-allowed'
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
