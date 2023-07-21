import { ReactNode } from 'react'
import { QSDIconProps, QSDIconsProps, QSDIconsVariant } from './types'
import { QsdIconsCortoIcon } from './variants/QsdIconsCorto'
import { QsdIconsLargoIcon } from './variants/QsdIconsLargo'

export const QSDIcon = ({ variant, colors, svgProps }: QSDIconProps) => {
  const qsdiconsProps: QSDIconsProps = {
    svgProps: { ...svgProps },
    colors: {
      primary: colors?.primary || '#f20da4',
      secondary: colors?.secondary || '#0052e8',
    },
  }

  const variants: Record<QSDIconsVariant, ReactNode> = {
    qsdiconscorto: <QsdIconsCortoIcon {...qsdiconsProps} />,
    qsdiconslargo: <QsdIconsLargoIcon {...qsdiconsProps} />,
  }

  return <>{variants[variant]}</>
}
