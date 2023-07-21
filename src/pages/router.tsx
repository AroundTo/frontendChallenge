import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import ViewProducts from './products/ViewProducts'
import RootLayout from '../layouts/RootLayout'
import NotFoundPage from './NotFoundPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} path="/">
      <Route errorElement={<NotFoundPage />}>
        <Route index element={<ViewProducts />} />
        <Route element={<div>List reviews</div>} path="reviews" />
        <Route element={<NotFoundPage />} path="*" />
      </Route>
    </Route>
  )
)
