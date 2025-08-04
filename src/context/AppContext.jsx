/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react"

export const Context = createContext()

const AppContext = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarMobile, setSidebarMobile] = useState(false)
  const [showDashboardAside, setShowDashboardAside] = useState(false)
  const [activeMiddleModal, setActiveMiddleModal] = useState(null)
  const [activeSideModal, setActiveSideModal] = useState(null)

  return (
    <Context.Provider
      value={{
        sidebarOpen,
        sidebarMobile,
        setSidebarOpen,
        setSidebarMobile,
        showDashboardAside,
        setShowDashboardAside,
        activeMiddleModal,
        setActiveMiddleModal,
        activeSideModal,
        setActiveSideModal,
      }}
    >
      {children}
    </Context.Provider>
  )
}

const useAppContext = () => {
  return useContext(Context)
}

export { AppContext, useAppContext }
