import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import ViewProducts from './products/ViewProducts'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <div>
          <Outlet />
        </div>
      }
      path="/"
    >
      <Route errorElement={<div>Not Found Page</div>}>
        <Route index element={<ViewProducts />} />
        <Route element={<div>List reviews</div>} path="reviews" />
        <Route element={<div>Not Found Page</div>} path="*" />
      </Route>
    </Route>
  )
)
