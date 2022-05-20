import React, { FC, ReactElement } from 'react'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import { styled } from '@mui/material/styles'
import { AccordionDetails, AccordionDetailsWithLink } from './AccordionDetails'
import AccordionSummary from './AccordionSummery'
import { Typo } from '../typography'

type Props = {
    title: string
    items: {
        name: string
        id: number
        href?: string
    }[]
}

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
    ({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        borderLeft: 0,
        borderRight: 0,
    }),
)

const CustomAccordion: FC<Props> = (props): ReactElement => {
    const { title = '', items = [] } = props

    const [expanded, setExpanded] = React.useState<string | false>('panel1')

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false)
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="w-auto">
                    <Typo noWrap variant="buttonMedium" className="text-onSurface-black-medium">
                        {title}
                    </Typo>
                </AccordionSummary>
                {items.map((item) => {
                    return item.href ? (
                        <AccordionDetailsWithLink href={item.href} key={item.name}>
                            <Typo variant="buttonMedium" className="text-onSurface-black-medium">
                                {item.name}
                            </Typo>
                        </AccordionDetailsWithLink>
                    ) : (
                        <AccordionDetails key={item.name}>
                            <Typo variant="buttonMedium" className="text-onSurface-black-medium">
                                {item.name}
                            </Typo>
                        </AccordionDetails>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default CustomAccordion
