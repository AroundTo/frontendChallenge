import clsx from 'clsx'
import { CustomComponent } from '../../../types'
import LoadingSpinner from '../../ui/LoadingSpinner'
import { PageLayoutType } from './PageLayout.types'

const PageLayout: CustomComponent<PageLayoutType> = ({
  children,
  className,
  loading,
  loadingMessage,
  title,
}) => (
  <>
    <h1 className="text-3xl font-bold mb-3 text-gray-600 my-4">{title}</h1>
    {loading ? (
      <LoadingSpinner>{loadingMessage}</LoadingSpinner>
    ) : (
      <div className={clsx('my-4', className)}>{children}</div>
    )}
  </>
)

export default PageLayout