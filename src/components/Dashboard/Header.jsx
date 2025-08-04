import { assets } from "@/assets/assets"
import { useAppContext } from "@/context/AppContext"
import {
  Bell,
  ChevronDown,
  CircleUser,
  Globe,
  Menu,
  MessageCircleMore,
  Power,
} from "lucide-react"
import React, { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "react-router-dom"

const Header = () => {
  const { setSidebarOpen } = useAppContext()
  const [open, setOpen] = useState(false)

  return (
    <header className='min-h-[70px] w-full px-[15px] flex items-center justify-between font-medium bg-white text-[#525b69] lg:bg-transparent shadow-headerShadow lg:shadow-none'>
      <div className='flex items-center space-x-2 w-1/2'>
        <button
          className='border-[1px] h-[40px] w-[40px] flex items-center justify-center rounded-[10px] border-solid border-border-gray-100 lg:hidden hover:bg-white/20'
          onClick={() => setSidebarOpen(true)}
        >
          <Menu />
        </button>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className='border-[1px] flex items-center justify-center md:justify-between gap-1 h-[40px] md:px-[8px] lg:h-[45px] 2xl:h-[48px] 2xl:gap-2 px-1 rounded-[10px] border-solid border-border-gray-100 hover:bg-waterColor'>
              <div className='h-[30px] w-[30px] rounded-radius-100'>
                <img
                  src={assets.dummy_profile}
                  className='h-full w-auto rounded-radius-100'
                  alt=''
                />
              </div>
              <p className='hidden md:block'>Hi, Julie workdo!</p>
              <div className='hidden md:block'>
                <ChevronDown size={16} color='gray' />
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={8}
            className='w-44 p-0 py-[15px] shadow-drop-down-shadow-primary border-none rounded-lg outline-none'
          >
            <div className='flex flex-col text-input-text-100 text-[0.875rem] font-medium'>
              <Link
                to={"/dashboard/profile/personalInfo"}
                className='flex items-center gap-[10px] py-[10px] px-[18px] hover:bg-waterColor'
                onClick={() => setOpen(false)}
              >
                <CircleUser size={18} />
                <p className='text-[#293240] opacity-60'>My Profile</p>
              </Link>
              <button
                className='flex items-center gap-[10px] py-[10px] px-[18px] hover:bg-waterColor'
                onClick={() => setOpen(false)}
              >
                <Power size={18} />
                <p className='text-[#293240] opacity-60'>Logout</p>
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className='flex items-center justify-end gap-[6px] w-1/2'>
        <button className='border-[1px] h-[40px] w-[40px] flex items-center justify-center rounded-[10px] border-solid border-border-gray-100 bg-white hover:bg-waterColor text-custom-blue-100'>
          <div className='relative'>
            <MessageCircleMore size={16} />
            <div className='absolute -top-[9px] bg-custom-red-100 h-[14px] rounded-full flex items-center justify-center w-[14px] -right-[8px] text-white text-[10px]'>
              0
            </div>
          </div>
        </button>
        <button className='border-[1px] h-[40px] w-[40px] flex items-center justify-center rounded-[10px] border-solid border-border-gray-100 bg-white hover:bg-waterColor text-custom-blue-100'>
          <div className='relative'>
            <Bell size={16} />
            <div className='absolute -top-[9px] bg-custom-red-100 h-[14px] rounded-full flex items-center justify-center w-[14px] -right-[8px] text-white text-[10px]'>
              0
            </div>
          </div>
        </button>
        <button className='border-[1px] h-[40px] px-2 flex items-center gap-1 justify-center rounded-[10px] border-solid border-border-gray-100 bg-white hover:bg-waterColor text-custom-blue-100'>
          <Globe size={19} color='#a7acb6' />
          <p className='hidden md:block'>English</p>
          <div className='hidden md:block'>
            <ChevronDown size={16} color='gray' />
          </div>
        </button>
      </div>
      <div></div>
    </header>
  )
}

export default Header
