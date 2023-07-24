import React from 'react'
import { CustomComponent } from '../../../types'
import clsx from 'clsx'
import { ButtonType } from './Button.types'

const Button: CustomComponent<ButtonType> = ({
  onClick,
  children,
  className = '',
  disabled = false,
  loading,
  color = 'primary',
}) => (
  <button
    className={clsx(
      `group relative overflow-hidden px-auto duration-300 flex items-center px-3 py-2 text-base rounded justify-center`,
      className,
      {
        'opacity-50 cursor-not-allowed': disabled,
        'text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800':
          color === 'primary',
        'border border-gray-400 text-gray-800 bg-gray-50 hover:bg-gray-100 active:bg-gray-200':
          color === 'outline-gray',
      }
    )}
    disabled={disabled}
    type="button"
    onClick={onClick}
  >
    {loading ? (
      <div className="animate-spin h-5 w-5 mr-2 border-2 rounded-full border-gray-50 border-r-gray-300 opacity-90" />
    ) : (
      children
    )}
  </button>
)

export default Button
