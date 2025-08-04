import UsersChart from "@/components/Dashboard/UsersChart"
import CustomOverviewCard from "@/components/Dashboard/CustomOverviewCard"
import PageTitle from "@/components/Dashboard/PageTitle"
import SafetyTip from "@/components/Dashboard/SafetyTip"
import { BadgeDollarSign, BookOpenCheck, UsersRound } from "lucide-react"
import React from "react"
import CPDOverview from "@/components/Dashboard/CPDOverview"
import UpcomingEvents from "@/components/Dashboard/UpcomingEvents"
import UploadedFIles from "@/components/Dashboard/UploadedFiles"

const DashboardHome = () => {
  return (
    <section className='pt-[2rem] md:pt-[2rem] px-[15px] lg:px-[15px] lg:pl-[24px]'>
      <PageTitle title={"Dashboard"} />

      {/* main */}
      <main className='mt-[30px]'>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[25px]'>
          <CustomOverviewCard
            label='Total Members'
            value={20}
            icon={<UsersRound size={20} />}
            highlight='orange'
          />
          <CustomOverviewCard
            label='Publications'
            value={4}
            icon={<BookOpenCheck size={20} />}
            highlight='blue'
          />
          <CustomOverviewCard
            label='Financials'
            value='$10,300'
            icon={<BadgeDollarSign size={20} />}
            highlight='lightBlue'
          />
        </div>

        {/* Overview */}
        <div className='lg:max-h-[400px] mt-[25px] grid grid-cols-1 xl:grid-cols-3 gap-[25px]'>
          <div className='h-full w-full'>
            <UsersChart />
          </div>
          <div className='h-full w-full overflow-y-auto'>
            <SafetyTip />
          </div>
          <div className='h-full w-full'>
            <CPDOverview />
          </div>
        </div>

        {/* upcoming events */}
        <UpcomingEvents />

        {/* Uploaded files */}
        <UploadedFIles />
      </main>
    </section>
  )
}

export default DashboardHome
