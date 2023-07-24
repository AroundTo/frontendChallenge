import { Link } from 'react-router-dom'
import { CustomComponent } from '../../types'
import { NotFoundPageType } from './NotFoundPage.types'

const NotFoundPage: CustomComponent<NotFoundPageType> = ({
  message = 'Page not found',
}) => (
  <div className="flex flex-col md:justify-center items-center">
    <div className="flex flex-col md:flex-row">
      <span className="font-bold text-4xl md:text-5xl mx-6 mb-4 md:mb-0">
        404
      </span>
      <div className="flex flex-col pl-6 border-l border-gray-400">
        <span className="text-3xl md:text-5xl font-semibold">{message}</span>
        <span className="text-lg md:text-xl mt-3">
          Please, verify the url in the browser navigation then try again.
        </span>
      </div>
    </div>
    <div className="flex mt-8">
      <Link className="text-primary-500 hover:underline" to="/">
        Go to Home
      </Link>
    </div>
  </div>
)

export default NotFoundPage
