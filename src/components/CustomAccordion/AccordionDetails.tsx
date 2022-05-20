import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { styled } from '@mui/material/styles'
import Link from 'next/link'

type Props = {
  children: JSX.Element | JSX.Element[]
  href: string,
  isActive: boolean
}

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme, isActive }) => {
  return {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: 'white',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    paddingTop: '14px',
    paddingBottom: '14px',
    borderLeftWidth: isActive && '4px',
    borderLeftColor: "#9AC760"
  }
})

export const AccordionDetailsWithLink = ({ children, href, isActive }: Props) => {
  return (
    <Link href={href}>
      <a>
        <AccordionDetails isActive={isActive}>{children} </AccordionDetails>
      </a>
    </Link>
  )
}
