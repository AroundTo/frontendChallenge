import { Outlet } from 'react-router-dom'
import NavLink from '../../components/links/NavLink'

const currentDate = new Date()

const RootLayout = () => (
  <div className="relative min-h-screen w-full flex flex-col justify-between items-cente">
    <header className="container lg:max-w-5xl mx-auto mt-6 mb-10 flex justify-end px-4">
      <nav className="text-gray-800 font-medium tracking-wider">
        <ul className="flex gap-4 lg:gap-6 items-center">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
        </ul>
      </nav>
    </header>
    <main className="container lg:max-w-5xl mx-auto flex flex-1 flex-col w-full px-4">
      <Outlet />
    </main>
    <footer className="text-sm mt-8 mb-4 mx-auto max-w-5xl text-gray-700">
      ©{currentDate.getFullYear()} -{' '}
      <a
        className="hover:underline"
        href="https://github.com/italonabuco"
        target="_black"
      >
        Italo Nabuco
      </a>
    </footer>
  </div>
)

export default RootLayout
