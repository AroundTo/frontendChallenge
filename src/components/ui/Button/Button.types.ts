import React from 'react'

export type ButtonType = {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  className?: string
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  color?: 'primary' | 'outline-gray'
}
