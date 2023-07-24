import { CustomComponent } from '../../../types'

const LoadingSpinner: CustomComponent = ({ children }) => (
  <div className="flex flex-col items-center mt-20">
    <div className="animate-spin h-10 w-10 border-2 rounded-full border-gray-300 border-r-gray-400 opacity-90" />
    <span className="mt-2 text-gray-600">{children}</span>
  </div>
)

export default LoadingSpinner
