// ** Router imports
import { lazy } from 'react'

// ** Router imports
import { useRoutes, Navigate } from 'react-router-dom'

// ** Default Route
const DefaultRoute = "/candidate"

const Candidate = lazy(() => import("@views/pages/candidate"))

// ** Components
const Error = lazy(() => import('@views/pages/Error'))

const Router = () => {
  
    const routes = useRoutes([
      {
        path: "/",
        index: true,
        element: <Navigate replace to={DefaultRoute} />
      },
      {
        path: "/candidate",
        element: <Candidate />
      },
      {
        path: '*',
        element: <Error />,
      },
    ])
  
    return routes
  }
  
  export default Router