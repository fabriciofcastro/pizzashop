import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../pages/_layouts/app'
import { AuthLayout } from '../pages/_layouts/auth'
import { Dashboard } from '../pages/app/dashboard'
import { SigniIn } from '../pages/auth/sign-in'
import { SignUp } from '../pages/auth/sign-up'


export const router = createBrowserRouter([
  {
    path: "/", element: <AppLayout />,
    children: [
      {
        path: "/", element: <Dashboard />
      },
          
    ]
  },

  {
    path: "/", element: <AuthLayout />,
    children: [
      {
        path: "/sign-in", element: <SigniIn />,
       
      },
      {
        path: "/sign-up", element: <SignUp />,
      }
    ]
  },
])
