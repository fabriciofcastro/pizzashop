import { RouterProvider } from 'react-router-dom'

import { router } from './components/routes/routes'

export function App() {
  return <RouterProvider router={router} />
}
