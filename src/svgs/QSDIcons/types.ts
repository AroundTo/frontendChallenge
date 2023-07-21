import { SVGProps } from 'react'
export type QSDIconsVariant = 'qsdiconscorto' | 'qsdiconslargo'

export type QSDIconProps = {
  variant: QSDIconsVariant
  svgProps?: SVGProps<SVGSVGElement>
  colors?: { primary: string; secondary: string }
}

export interface QSDIconsProps {
  svgProps?: SVGProps<SVGSVGElement>
  colors: {
    primary: string
    secondary: string
  }
}
