import { Field, ErrorMessage } from "formik"

const DashboardCustomInput = ({
  name,
  label = "Amount",
  type,
  required = true,
  placeholder = "Enter amount",
}) => {
  return (
    <div className='mt-2 flex flex-col'>
      <label htmlFor={name} className='text-[13px] font-semibold mb-1'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>

      <Field
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        className={({ form: { errors, touched } }) =>
          `font-extralight w-full border p-2 rounded-radius-100 outline-none ${
            errors[name] && touched[name]
              ? "border-red-500"
              : "border-[#D9DCF9]"
          }`
        }
      />

      <ErrorMessage
        name={name}
        component='div'
        className='text-red-500 text-[12px]'
      />
    </div>
  )
}

export default DashboardCustomInput
