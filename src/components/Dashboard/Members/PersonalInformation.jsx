import { assets } from "@/assets/assets"
import { profileValidationSchema } from "@/schema"
import { Form, Formik, Field, FieldArray } from "formik"
import { Upload } from "lucide-react"
import React, { useRef, useState } from "react"
import PhoneInput from "react-phone-input-2"

const PersonalInformation = () => {
  const fileInputRef = useRef(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null)

  const initialValues = {
    profileImage: null,
    fullName: "",
    email: "",
    contact: "",
    address: "",
    birthDate: "",
    specialization: "",
    workplace: "",
    region: "",
    rank: "",
    yearsOfExperience: "",
    gender: "",
    postalAddress: "",
    qualifications: [
      {
        title: "",
        institution: "",
        year: "",
        specialization: "",
        certificate: null,
      },
    ],
  }

  const handleProfile = (values) => {
    const formData = new FormData()

    // Loop through values and append
    Object.entries(values).forEach(([key, val]) => {
      if (key === "qualifications") {
        val.forEach((q, idx) => {
          Object.entries(q).forEach(([subKey, subVal]) => {
            formData.append(`qualifications[${idx}][${subKey}]`, subVal)
          })
        })
      } else {
        formData.append(key, val)
      }
    })

    if (values.profileImage) {
      formData.append("profileImage", values.profileImage)
    }

    console.log(formData)
  }

  return (
    <div>
      {/* profile picture  card*/}
      <Formik
        initialValues={initialValues}
        validationSchema={profileValidationSchema}
        onSubmit={handleProfile}
      >
        {({ values, setFieldValue, errors }) => (
          <Form>
            <div className='shadow-subtle bg-white rounded-radius-200 p-[24px] flex flex-col md:flex-row items-center justify-between'>
              <div className='flex flex-col md:flex-row items-center gap-2'>
                <div className='w-[6.5rem] h-[6.5rem] border-[2px] border-custom-blue-100 rounded-[10px] overflow-hidden'>
                  <label htmlFor='profileImage'>
                    <img
                      src={imagePreviewUrl || assets.dummy_profile}
                      className='w-full h-full object-cover'
                      alt=''
                    />
                  </label>
                  <input
                    type='file'
                    id='profileImage'
                    name='profileImage'
                    accept='image/*'
                    hidden
                    ref={fileInputRef}
                    onChange={(e) => {
                      const file = e.target.files[0]
                      setFieldValue("profileImage", file)
                      const objectUrl = URL.createObjectURL(file)
                      setImagePreviewUrl(objectUrl)
                    }}
                  />
                </div>
                <div className='mt-2 md:mt-0'>
                  <h1 className='text-[15px] font-semibold'>
                    Upload a New Photo
                  </h1>
                  <p className='text-[10.5px] text-custom-lightGray-100'>
                    Please upload a valid image file
                  </p>
                </div>
              </div>
              <button
                type='button'
                className='flex text-[13px] py-[6px] text-white px-3 rounded-radius-100 items-center gap-1 mt-4 md:mt-0 bg-gradient-to-br from-custom-blue-100 to-custom-blue-200'
                onClick={() =>
                  fileInputRef.current && fileInputRef.current.click()
                }
              >
                <Upload size={14} />
                <span>Upload</span>
              </button>
            </div>
            {/* general form */}
            <div className='shadow-subtle bg-white rounded-radius-200 py-[24px] mt-[24px] text-[0.875rem]'>
              <div className='pb-[14px] relative border-b-[1px] border-b-border-gray-100 px-[24px] flex items-center justify-between'>
                <div>
                  <p className='text-[16px] font-semibold'>
                    Personal Information
                  </p>
                  <p className='text-custom-lightGray-100 text-[10px]'>
                    Details about your personal information
                  </p>
                </div>
                <div className='absolute top-0 left-0 z-0 h-[25px] bg-custom-blue-100 w-[2.5px] rounded-l-0 rounded-[10px]' />
              </div>
              <div className=''>
                {/* first name and email*/}
                <div className='flex flex-col md:flex-row mt-4 gap-4 px-[20px] md:px-[24px]'>
                  {/* fullName */}
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='fullName' className='font-semibold'>
                      Full Name<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      name='fullName'
                      className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                      placeholder='Enter Your Name'
                    />
                  </div>
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='email' className='font-semibold'>
                      Email Address<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      name='email'
                      className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                      placeholder='Enter Your Email'
                    />
                  </div>
                </div>

                {/* contact and address */}
                <div className='flex flex-col md:flex-row mt-4 gap-4 px-[24px]'>
                  {/* contact */}
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='contact' className='font-semibold mb-1'>
                      Contact<span className='text-red-500'>*</span>
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
                        border: "1.6px solid rgba(206, 206, 206, 0.2)",
                        outline: "none",
                        height: "40px",
                        padding: "0 50px",
                        marginTop: "4px",
                      }}
                    />
                  </div>
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='address' className='font-semibold'>
                      Address<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      name='address'
                      className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                      placeholder='Enter Your Address'
                    />
                  </div>
                </div>

                {/* birthDate and Specialization  */}
                <div className='flex flex-col md:flex-row mt-4 gap-4 px-[20px] md:px-[24px]'>
                  {/* fullName */}
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='birthDate' className='font-semibold'>
                      Date of Birth<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      type='date'
                      name='birthDate'
                      className='outline-none w-[100%] text-start bg-transparent placeholder:font-light py-[8px] h-[40px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                      placeholder='Enter Your Birth Date'
                    />
                  </div>
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='specialization' className='font-semibold'>
                      Specialization<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      name='specialization'
                      className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                      placeholder='Enter Your Specialization'
                    />
                  </div>
                </div>

                {/* Workplace  */}
                <div className='flex flex-col md:flex-row mt-4 gap-4 px-[20px] md:px-[24px]'>
                  {/* workplace */}
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='workplace' className='font-semibold'>
                      Workplace<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      name='workplace'
                      className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                      placeholder='Enter Your Workplace'
                    />
                  </div>
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='region' className='font-semibold'>
                      Region<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      name='region'
                      className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                      placeholder='Enter Your Region'
                    />
                  </div>
                </div>

                {/* Rank and Experience  */}
                <div className='flex flex-col md:flex-row mt-4 gap-4 px-[20px] md:px-[24px]'>
                  {/* Rank */}
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='rank' className='font-semibold'>
                      Rank<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      name='rank'
                      className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                      placeholder='Enter Your Rank/Title'
                    />
                  </div>
                  <div className='flex-1 flex flex-col'>
                    <label
                      htmlFor='yearsOfExperience'
                      className='font-semibold'
                    >
                      Years Of Experience<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      type='number'
                      name='yearsOfExperience'
                      className={`outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px] ${
                        errors.yearsOfExperience
                          ? "border-red-500"
                          : "border-border-gray-100"
                      }`}
                      placeholder='Enter Your Years Of Experience'
                    />
                  </div>
                </div>

                {/* Gender And Postal Address  */}
                <div className='flex flex-col md:flex-row mt-4 gap-4 px-[20px] md:px-[24px]'>
                  {/* Rank */}
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='gender' className='font-semibold'>
                      Gender<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      as='select'
                      name='gender'
                      className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] bg-transparent mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                    >
                      <option value='' disabled>
                        Select your gender
                      </option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </Field>
                  </div>
                  <div className='flex-1 flex flex-col'>
                    <label htmlFor='postalAddress' className='font-semibold'>
                      Postal Address<span className='text-red-500'>*</span>
                    </label>
                    <Field
                      name='postalAddress'
                      className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                      placeholder='Enter Your Postal Address'
                    />
                  </div>
                </div>

                {/* Qualification   */}
                <div className='mt-6 gap-4 px-[20px] md:px-[24px]'>
                  <div className='w-full'>
                    <h3 className='font-semibold mb-2'>Qualifications</h3>
                    <FieldArray name='qualifications'>
                      {({ push, remove }) => (
                        <>
                          {values.qualifications.map((qualification, index) => (
                            <div
                              key={index}
                              className='grid grid-cols-1 md:grid-cols-2 gap-4 border pt-6 p-4 rounded mb-4 relative border-border-gray-100'
                            >
                              {/* Title */}
                              <div className='flex-1 flex flex-col'>
                                <label
                                  htmlFor={`qualifications.${index}.title`}
                                  className='font-semibold'
                                >
                                  Title
                                </label>
                                <Field
                                  name={`qualifications.${index}.title`}
                                  placeholder='Title'
                                  className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                                />
                              </div>

                              {/* Institution */}
                              <div className='flex-1 flex flex-col'>
                                <label
                                  htmlFor={`qualifications.${index}.institution`}
                                  className='font-semibold'
                                >
                                  Institution
                                </label>
                                <Field
                                  name={`qualifications.${index}.institution`}
                                  placeholder='Institution'
                                  className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                                />
                              </div>

                              {/* Year */}
                              <div className='flex-1 flex flex-col'>
                                <label
                                  htmlFor={`qualifications.${index}.year`}
                                  className='font-semibold'
                                >
                                  Year
                                </label>
                                <Field
                                  name={`qualifications.${index}.year`}
                                  type='date'
                                  className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                                />
                              </div>

                              {/* Specialization */}
                              <div className='flex-1 flex flex-col'>
                                <label
                                  htmlFor={`qualifications.${index}.specialization`}
                                  className='font-semibold'
                                >
                                  Specialization
                                </label>
                                <Field
                                  name={`qualifications.${index}.specialization`}
                                  placeholder='Specialization'
                                  className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                                />

                                {/* Certificate Upload */}
                                <div className='flex-1 flex flex-col mt-4'>
                                  <label
                                    htmlFor={`qualifications.${index}.certificate`}
                                    className='font-semibold'
                                  >
                                    Certificate
                                  </label>
                                  <input
                                    type='file'
                                    name={`qualifications.${index}.certificate`}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `qualifications.${index}.certificate`,
                                        e.currentTarget.files[0]
                                      )
                                    }
                                    className='outline-none w-full placeholder:font-light py-[8px] rounded-radius-100 border-[1.6px] mt-1 px-2 border-border-gray-100 text-input-text-100 md:text-[14px]'
                                  />
                                </div>
                              </div>

                              {/* Remove button */}
                              <button
                                type='button'
                                onClick={() => remove(index)}
                                className='absolute top-2 right-2 text-red-500 hover:text-red-700'
                              >
                                ✕
                              </button>
                            </div>
                          ))}

                          <button
                            type='button'
                            onClick={() =>
                              push({
                                title: "",
                                institution: "",
                                year: "",
                                specialization: "",
                                certificate: null,
                              })
                            }
                            className='bg-green-600 text-white px-4 py-2 rounded mt-2'
                          >
                            + Add Qualification
                          </button>
                        </>
                      )}
                    </FieldArray>
                  </div>
                </div>

                {/* Submit button */}
                <div className='mt-10 flex justify-end px-[20px] md:px-[24px]'>
                  <button
                    type='submit'
                    className='flex text-[13px] py-[10px] text-white px-3 rounded-radius-100 items-center gap-1 mt-4 md:mt-0 bg-gradient-to-br from-custom-blue-100 to-custom-blue-200 hover:bg-gradient-to-br hover:from-[#023E8A] hover:to-[#023E8A]'
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PersonalInformation
