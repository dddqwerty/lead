import * as React from 'react';
import Button from '@mui/material/Button';
import { border, borderColor } from '@mui/system';

type Variants = 'fill' | 'ghost' | 'text' | 'link'

type Props = {
  variant: Variants,
  children: React.ReactNode,
  classname?: string,
  onClick?: () => void,
  disabled?: boolean
}

export default function CustomButton(props: Props) {

  const { variant, children, classname, onClick, disabled = false } = props

  const getClasses = (variant: Variants) => {
    switch (variant) {
      case 'fill':
        return `hover:bg-primary-light ${disabled ? 'bg-[#C4C4C4]' : 'bg-primary-main'}`
      case 'ghost':
        return `hover:opacity-[0.75] bg-transparent border-primary-main border-[1.5px]`
      case 'text':
        return `hover:opacity-[0.75] hover:bg-transparent`
      case 'link':
        return `hover:opacity-[0.75] hover:bg-transparent underline`
    }
  }

  return (
    <Button disabled={disabled} onClick={onClick} variant={variant === 'fill' ? 'contained' : variant === 'ghost' ? 'outlined' : 'text'} sx={{ padding: 0 }} className={`py-3 px-5 ${classname} ${getClasses(variant)}`}>
      {children}
    </Button>

  );
}
