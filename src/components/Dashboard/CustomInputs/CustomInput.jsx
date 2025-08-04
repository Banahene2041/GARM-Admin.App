import React from "react"
import { useField } from "formik"

const CustomInput = ({
  label,
  labelClass,
  inputClass,
  wrapperClassname,
  ...props
}) => {
  const [field, meta] = useField(props)

  return (
    <div className={wrapperClassname}>
      <label className={labelClass}>{label}</label>
      <input
        {...field}
        {...props}
        className={`${inputClass} ${
          meta.touched && meta.error
            ? "!border-custom-red-100 focus:!border-custom-red-100 focus:!shadow-inputErrorShadow"
            : ""
        }`}
      />
      {meta.error && meta.touched && (
        <p className='text-custom-red-100 font-semibold text-[12px] md:text-[13px]'>
          {meta.error}
        </p>
      )}
    </div>
  )
}

export default CustomInput
