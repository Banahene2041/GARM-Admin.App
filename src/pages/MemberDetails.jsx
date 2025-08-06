import React from "react"
import PageTitle from "@/components/Dashboard/PageTitle"
import { Link, useParams } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import {
  ChangePassword,
  PersonalInformation,
  TwoFactorAuthentication,
} from "@/components/Dashboard/Members"

const MemberDetails = () => {
  const { tabs, memberId } = useParams()
  console.log(tabs,memberId)
  const subTitleLinks = [
    { label: "home", url: "/dashboard/home" },
    { label: "Members", url: "/dashboard/members" },
  ]

  return (
    <section className='pt-[2rem] md:pt-[2rem] px-[15px] lg:px-[15px] lg:pl-[24px]'>
      <PageTitle
        title={"Member Detail"}
        subTitleLinks={subTitleLinks}
        subTitle={"Member Detail"}
      />
      <div className='mt-[30px] flex flex-col xl:flex-row items-start gap-[24px]'>
        {/* selectedSettings Buttons */}
        <div className='flex flex-col items-start shadow-subtle bg-white w-full xl:w-[300px] 2xl:w-[359px] rounded-radius-200'>
          <Link
            to={`/dashboard/members/${memberId}/personalInfo`}
            className={`flex items-center justify-between rounded-t-radius-200 p-[14px] w-full ${
              tabs === "personalInfo"
                ? "bg-gradient-to-br from-custom-blue-100 to-custom-blue-200 text-white"
                : "hover:bg-waterColor text-black-100"
            } `}
          >
            <span>Personal Info</span>
            <ChevronRight size={16} />
          </Link>
          <Link
            to={`/dashboard/members/${memberId}/changePassword`}
            className={`flex items-center justify-between p-[14px] w-full ${
              tabs === "changePassword"
                ? "bg-gradient-to-br from-custom-blue-100 to-custom-blue-200 text-white"
                : "hover:bg-waterColor text-black-100 hover:opacity-80"
            } `}
          >
            <span>Change Password</span>
            <ChevronRight size={16} />
          </Link>
          <Link
            to={`/dashboard/members/${memberId}/twoFactor`}
            className={`flex items-center justify-between rounded-b-radius-200 p-[14px] w-full ${
              tabs === "twoFactor"
                ? "bg-gradient-to-br from-custom-blue-100 to-custom-blue-200 text-white"
                : "hover:bg-waterColor text-black-100 hover:opacity-80"
            } `}
          >
            <span>Two Factor Authentication</span>
            <ChevronRight size={16} />
          </Link>
        </div>
        <main className='w-full flex-1'>
          {tabs === "personalInfo" && <PersonalInformation />}
          {tabs === "changePassword" && <ChangePassword />}
          {tabs === "twoFactor" && <TwoFactorAuthentication />}
        </main>
      </div>
    </section>
  )
}

export default MemberDetails
