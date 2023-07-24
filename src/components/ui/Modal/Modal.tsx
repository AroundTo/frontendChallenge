import React from 'react'
import { CustomComponent } from '../../../types'
import clsx from 'clsx'
import { ModalBodyType, ModalHeaderType, ModalType } from './Modal.types'

export const ModalHeader: ModalHeaderType = ({ title, onClose, onBack }) => (
  <div className="flex justify-between items-center mb-8">
    {/* <IconButton
      onClick={onBack}
      icon={`ri-arrow-left-s-line text-black group-hover:text-gray-800`}
      size="md"
      className={classNames(`hover:bg-gray-200 active:bg-gray-300 relative`, {
        invisible: !onBack,
      })}
    /> */}
    <span className="text-xl md:text-3xl font-medium text-center">{title}</span>
    {/* <IconButton
      onClick={onClose}
      icon={`ri-close-line text-black group-hover:text-gray-800`}
      size="md"
      className={`hover:bg-gray-200 active:bg-gray-300 relative`}
    /> */}
  </div>
)

export const Modal: ModalType = ({ onBackdropClick, children }) => (
  <div className="z-20 top-0 left-0 fixed h-full w-full flex flex-col items-center p-4 md:p-10">
    <div className="bg-white w-full z-20 max-h-full overflow-y-auto max-w-screen-md rounded-md drop-shadow-lg p-4 md:p-10 md:py-6 flex flex-col">
      {children}
    </div>
    <div
      className="z-10 top-0 opacity-40 absolute bg-gray-900 h-full w-full"
      role="presentation"
      onClick={onBackdropClick}
    />
  </div>
)

export const ModalBody: ModalBodyType = ({
  className,
  children,
  innerComponent,
}) => (
  <div className={'flex flex-1 overflow-auto w-full ' + className}>
    <div
      {...innerComponent}
      className={clsx('flex flex-1 flex-col', innerComponent?.className)}
    >
      {children}
    </div>
  </div>
)
export const ModalFooter: CustomComponent = ({ children, className }) => (
  <div className={clsx('mt-6', className)}>{children}</div>
)
