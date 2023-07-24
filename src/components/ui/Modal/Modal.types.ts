import React from 'react'
import { CustomComponent } from '../../../types'

export interface INewModalRef {
  onClose: () => void
}

export type ModalType = CustomComponent<{
  onBackdropClick?: () => void
}>

export type ModalHeaderType = CustomComponent<{
  title: string
  onBack?: () => void
  onClose: () => void
}>

export type ModalBodyType = CustomComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    innerComponent?: React.HTMLAttributes<HTMLDivElement>
  }
>
