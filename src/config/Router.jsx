import { createBrowserRouter, Navigate } from "react-router-dom"
import {
  AuthRootLayout,
  Login,
  ForgotPassword,
  DashboardLayout,
  Error,
  ResetPassword,
  DashboardHome,
  Users,
  Financials,
  Publications,
  CPDPoints,
  Events,
  Profile,
} from "@/pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Navigate to='home' replace /> },
      { path: "home", element: <DashboardHome /> },
      { path: "members", element: <Users /> },
      { path: "cpd-points", element: <CPDPoints /> },
      { path: "financials", element: <Financials /> },
      { path: "publications", element: <Publications /> },
      { path: "events", element: <Events /> },
      { path: "profile/:tabs", element: <Profile /> },
    ],
  },
])
