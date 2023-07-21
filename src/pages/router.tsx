import {
  Navigate,
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
        <Route index element={<Navigate to="products" />} />
        <Route element={<ViewProducts />} path="products" />
        <Route element={<div>List reviews</div>} path="reviews" />
        <Route element={<NotFoundPage />} path="*" />
      </Route>
    </Route>
  )
)
