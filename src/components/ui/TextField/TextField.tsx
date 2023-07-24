import clsx from 'clsx'
import React from 'react'
import { TextFieldType } from './TextField.types'

const TextField: React.FC<TextFieldType> = props => {
  const {
    id,
    value,
    placeholder,
    onChange,
    fullWidth,
    error,
    disabled,
    label,
    description,
    className,
    fieldClassName,
    type = 'input',
  } = props

  const commonStyles = clsx(
    'block px-3 py-3 rounded-md border focus:outline-none bg-gray-100',
    {
      'w-full': fullWidth,
      'cursor-not-allowed bg-gray-200 text-gray-500': disabled,
      'border-neutral-300 focus:border-neutral-400 ring-neutral-200': !error,
      'border-red-400 focus:border-red-600 ring-red-200': error || false,
    },
    fieldClassName
  )

  const commonProps: React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    className: commonStyles,
    disabled,
    id,
    placeholder,
    value,
    onChange: e => onChange?.(e.target.value),
  }
  return (
    <div className={`flex flex-col col-span-full ${className}`}>
      {label && (
        <label className="text-base font-semibold mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      {description && <span className="text-sm -mt-1 mb-1">{description}</span>}
      {type === 'textarea' && <textarea rows={3} {...commonProps} />}
      {type === 'input' && <input type="text" {...commonProps} />}

      {error && (
        <p className="text-red-600 text-sm mt-0.5 font-semibold cursor-pointer">
          {error}
        </p>
      )}
    </div>
  )
}

export default TextField
