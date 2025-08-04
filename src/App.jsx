import React from "react"
import "react-phone-input-2/lib/style.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import { router } from "./config/Router"
import { AppContext } from "./context/AppContext"

const queryClient = new QueryClient()

const App = () => {
  return (
    <div className='font-openSans'>
      <QueryClientProvider client={queryClient}>
        <AppContext>
          <RouterProvider router={router} />
        </AppContext>
      </QueryClientProvider>
    </div>
  )
}

export default App
