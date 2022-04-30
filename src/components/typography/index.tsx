import { FC, ReactElement } from 'react'

type Variants = 'h1' | 'h2' | 'h3' | 'title1' | 'caption' | 'subhead' | 'body' | 'body-bold' | 'body-semibold';
type Props = {
  variant: Variants
  className?: string
  children: React.ReactNode
}

export const Typo: FC<Props> = (props): ReactElement => {
  const { variant, className = '', children } = props

  const getClasses = (variant: Variants) => {
    switch (variant) {
      case 'h1':
        return 'font-extrabold text-h1'
      case 'h2':
        return 'font-bold text-h2'
      case 'h3':
        return 'font-bold text-h3'
      case 'title1':
        return 'font-bold text-title1'
      case 'body-bold':
        return 'font-bold text-bodyBold'
      case 'body-semibold':
        return 'font-semibold text-bodySemiBold'
      case 'body':
        return 'font-normal text-body'
      case 'subhead':
        return 'font-normal text-subh'
      case 'caption':
        return 'font-normal text-caption'
      default:
        return ''
    }
  }

  return <div className={`${getClasses(variant)} ${className}`}> {children} </div>
}

export default Typo; 
