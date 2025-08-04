import PageTitle from "@/components/Dashboard/PageTitle"
import { File, FileSliders, Plus } from "lucide-react"
import React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Members from "@/components/Dashboard/Members/Members"

const Users = () => {
  const subTitleLinks = [{ label: "home", url: "/dashboard/home" }]

  return (
    <section className='pt-[2rem] md:pt-[2rem] px-[15px] lg:px-[15px] lg:pl-[24px]'>
      <div className='flex items-center justify-between'>
        <PageTitle
          title={"Members"}
          subTitleLinks={subTitleLinks}
          subTitle={"Members"}
        />
        <div className='flex items-center gap-1 text-white'>
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
              <button className='p-2 bg-custom-blue-100 hover:bg-custom-blue-200 rounded-[3px] cursor-pointer'>
                <Plus size={15} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add Member</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <main className='mt-[30px]'>
        <Members />
      </main>
    </section>
  )
}

export default Users
