import { assets } from "@/assets/assets"
import { useAppContext } from "@/context/AppContext"
import { DashboardNavLinks } from "@/data"
import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useAppContext()
  const location = useLocation()

  const closeSideBar = (e) => {
    if (e.target.classList.contains("translate-x-[0%]")) {
      setSidebarOpen(false)
    }
  }

  const links = DashboardNavLinks()

  useEffect(() => {
    if (sidebarOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [sidebarOpen])

  return (
    <aside
      className={`h-screen w-full lg:w-[250px] max-h-full fixed top-0 left-0 right-0 bottom-0 z-40 overflow-y-hidden ${
        sidebarOpen ? "translate-x-[0%]" : ""
      } -translate-x-[100%] lg:translate-x-0 lg:fixed bg-sidebarMobileBackground lg:bg-transparent transition-transform duration-300 ease-in-out lg:transition-none`}
      onClick={closeSideBar}
    >
      <div className='w-[250px] lg:w-full bg-white h-full lg:bg-transparent overflow-y-auto'>
        <header className='h-[75px] flex items-center justify-center'>
          <img src={assets.logo_one} alt='' />
        </header>
        <nav className='mt-6 px-4'>
          {links.map((link, index) => {
            const isActive = location.pathname === link.url
            return (
              <ul
                key={index}
                className='my-[8px] font-semibold text-sm text-gray-700'
              >
                <li>
                  <Link
                    to={link.url}
                    className={`flex items-center space-x-4 text-[13px] px-2 py-[8px] rounded-[12px] hover:bg-custom-blue-100 cursor-pointer transition-colors hover:text-white duration-200 group ${
                      isActive ? "bg-custom-blue-100 text-white" : ""
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <div className='bg-white shadow-linkShadow h-[33px] w-[33px] rounded-[10px] flex items-center justify-center'>
                      <span
                        className={`${
                          isActive ? "text-custom-blue-100" : ""
                        } group-hover:text-custom-blue-100`}
                      >
                        {link.icon}
                      </span>
                    </div>
                    <span className='drop-shadow-sm'>{link.label}</span>
                  </Link>
                </li>
              </ul>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
