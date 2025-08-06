import { assets } from "@/assets/assets"
import CustomMiddleModal from "@/components/ui/CustomMiddleModal"
import { useAppContext } from "@/context/AppContext"
import { X } from "lucide-react"
import React, { useState } from "react"
import OtpInput from "react-otp-input"
import { QRCodeSVG } from "qrcode.react"

const TwoFactorAuthentication = () => {
  const { setActiveMiddleModal } = useAppContext()
  const twoFactorAuth = "LKS7-28H8-39190-MAXX-72LA-OHAJ-SCBH"

  const [otp, setOtp] = useState("")

  const handleChange = (otp) => {
    setOtp(otp)
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText(twoFactorAuth)
      .then(() => {
        alert("Copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  const openModalOtp = () => {
    // setActiveMiddleModal("")

    // setTimeout(() => {
    setActiveMiddleModal("otpModal")
    // }, 500)
  }

  return (
    <>
      <div className='shadow-subtle bg-white rounded-radius-200 py-[24px] text-[0.875rem]'>
        <div className='pb-[14px] relative border-b-[1px] border-b-border-gray-100 px-[24px] flex items-center justify-between'>
          <div>
            <p className='text-[16px] font-semibold'>
              Enable Two-Step Verification
            </p>
            <p className='text-custom-lightGray-100 text-[10px]'>
              Add an extra layer of security
            </p>
          </div>
          <div className='absolute top-0 left-0 z-0 h-[25px] bg-custom-blue-100 w-[2.5px] rounded-l-0 rounded-[10px]' />
        </div>

        {/* Generate Secret key */}
        <div className=' mt-4 px-[20px] md:px-[24px]'>
          <p className='text-sm'>
            Two factor authentication (2FA) strengthens access security by
            requiring two methods (also referred to as factors) to verify your
            identity. Two factor authentication protects against phishing,
            social engineering and password brute force attacks and secures your
            logins from attackers exploiting weak or stolen credentials.
          </p>

          <div className='mt-10 flex items-center justify-center px-[20px] md:px-[24px]'>
            <button
              className='flex text-[13px] py-[10px] text-white px-3 rounded-radius-100 items-center gap-1 mt-4 md:mt-0 bg-gradient-to-br from-custom-blue-100 to-custom-blue-200 hover:bg-gradient-to-br hover:from-[#023E8A] hover:to-[#023E8A] cursor-pointer'
              onClick={() => setActiveMiddleModal("auth")}
            >
              Generate Secret Key To Enable 2FA
            </button>
          </div>
        </div>
      </div>

      <CustomMiddleModal
        modalId={"auth"}
        closeModalOutside={false}
        className={
          "bg-white text-black w-[90%] md:max-w-[550px] rounded-sm px-4 pb-6 relative"
        }
      >
        <button
          type='button'
          className='absolute right-1 top-2 cursor-pointer'
          onClick={() => setActiveMiddleModal("")}
        >
          <X color='#B5B5C3' size={20} />
        </button>
        <div className='rounded-sm w-full py-8 px-3 pb-[35px]'>
          <h2 className='text-center text-[#808080] text-[20px] md:text-[30px] font-semibold'>
            Turn on 2-Step Verification
          </h2>
          <p className='text-center text-[15px] md:text-[18px] font-light text-[#808080] mt-5'>
            Open authenticator and choose scan barcode
          </p>
          <div className='flex items-center justify-center mt-4 xl:mt-8'>
            <QRCodeSVG value='https://epahubb.com' size={150} />;
          </div>
        </div>
        <div className='mt-6 flex items-center justify-center'>
          <button
            type='button'
            className='bg-[#3699FF] w-full md:w-[80%] text-white text-[12px] md:text-[13px] py-[10px] md:py-[12px] rounded-sm cursor-pointer'
            onClick={openModalOtp}
          >
            Enable 2FA
          </button>
        </div>
        <p className='text-[15px] md:text-[16px] font-light text-[#808080] text-center mt-2'>
          OR enter the code manually
        </p>
        <div className='mt-8 flex items-center justify-center'>
          <div className='bg-[#15171C] w-full md:w-[80%] text-white text-[12px] md:text-[13px] h-[2.3rem] rounded-sm flex items-center justify-between px-2'>
            <p className='text-[12px] md:text-[13px] xl:text-[14px]'>
              {twoFactorAuth}
            </p>
            <button
              type='button'
              className='cursor-pointer'
              onClick={handleCopy}
            >
              <img src={assets.copy_icon} alt='copy icon' />
            </button>
          </div>
        </div>
      </CustomMiddleModal>

      {/* otp modal */}
      <CustomMiddleModal
        modalId={"otpModal"}
        closeModalOutside={false}
        className={
          "bg-white text-black w-[95%] md:max-w-[550px] rounded-sm px-0 md:px-4 pb-4 relative"
        }
      >
        <button
          type='button'
          className='absolute right-1 top-2 cursor-pointer'
          onClick={() => setActiveMiddleModal("")}
        >
          <X color='#B5B5C3' size={20} />
        </button>
        <div className='rounded-sm w-full py-8 px-3 pb-[35px]'>
          <h2 className='text-center text-[#808080] text-[20px] md:text-[30px] font-semibold'>
            Turn on 2-Step Verification
          </h2>
          <p className='text-center text-[15px] md:text-[18px] font-light text-[#808080] mt-4'>
            Enter 6-digit code from your authenticator app.
          </p>
          <div className='mt-8'>
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              separator={<span className='mx-2'></span>}
              isInputNum
              renderInput={(props) => (
                <input
                  {...props}
                  type='text'
                  inputMode='numeric'
                  pattern='[0-9]*'
                  maxLength='1'
                  style={{
                    padding: "0rem 1rem",
                    width: "100%",
                    height: "3rem",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    borderRadius: "4px",
                    margin: "0 0.3rem",
                    backgroundColor: "#F3F6F9",
                  }}
                  className='otp'
                  onChange={(e) => {
                    const value = e.target.value
                    if (/^[0-9]$/.test(value)) {
                      props.onChange(e)
                      const nextInput = e.target.nextElementSibling
                      if (nextInput) {
                        nextInput.focus()
                      }
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !e.target.value) {
                      const prevInput = e.target.previousElementSibling
                      if (prevInput) {
                        prevInput.focus()
                      }
                    }
                  }}
                />
              )}
            />
          </div>
          <div className='mt-6 flex items-center justify-center'>
            <button
              type='button'
              className='bg-[#3699FF] w-full md:w-[100%] text-white text-[12px] md:text-[13px] py-[10px] md:py-[12px] rounded-sm cursor-pointer'
            >
              Enable 2FA
            </button>
          </div>
        </div>
      </CustomMiddleModal>
    </>
  )
}

export default TwoFactorAuthentication
