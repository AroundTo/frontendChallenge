import {
  createBrowserRouter
} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import ProductsPage from './pages/ProductsPage'
import ReviewsPage from './pages/ReviewsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/reviews',
    element: <ReviewsPage />,
    errorElement: <ErrorPage />
  }
])
