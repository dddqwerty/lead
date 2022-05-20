import { FC, ReactElement } from 'react'

type Variants = 'h1' | 'h2' | 'h3' | 'title1' | 'caption' | 'subhead' | 'body' | 'body-bold' | 'body-semibold' | 'body-mobile' | 'mobile'
type Props = {
  variant: Variants
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export const Typo: FC<Props> = (props): ReactElement => {
  const { variant, className = '', children, onClick } = props

  const getClasses = (variant: Variants) => {
    switch (variant) {
      case 'h1':
        return 'font-extrabold text-h1 leading-[53px]'
      case 'h2':
        return 'font-bold text-h2'
      case 'h3':
        return 'font-bold text-h3'
      case 'title1':
        return 'font-bold text-title1'
      case 'body-bold':
        return 'font-bold text-bodyBold'
      case 'body-semibold':
        return 'font-semibold text-bodySemiBold font-sans-pro'
      case 'body':
        return 'font-normal font-sans-pro text-body leading-[27.72px]'
      case 'subhead':
        return 'font-normal font-sans-pro text-subh'
      case 'caption':
        return 'font-normal font-sans-pro text-caption'
      case 'body-mobile':
        return 'font-extrabold text-bodyMobile leading-[27px]'
      case 'mobile':
        return 'font-semibold text-mobile leading-[23px]'
      default:
        return ''
    }
  }

  return <div className={`${getClasses(variant)} ${className}`} onClick={onClick}> {children} </div>
}

export default Typo
