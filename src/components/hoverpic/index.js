import { Typography } from 'components'
import { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'

export const GirdPic = (props) => {
  const [hidden, sethidden] = useState(true)
  const [reclose, setReclose] = useState(false)

  const { img, text, subText = '', type, link } = props

  const Hoverr = () => {
    if (hidden) {
      sethidden(false)
    } else sethidden(true)
  }

  const ExHoverr = () => {
    if (!reclose) {
      setReclose(true)
    } else setReclose(false)
  }

  const variants = {
    open: { opacity: 0.25, x: '0%' },
    closed: { opacity: 0, x: '100%' },
    reclose1: { opacity: 0.25, x: '0%' },
    reclose2: { opacity: 0, x: '100%' },
    invis: { opacity: 0 },
    vis: { opacity: 1 },
  }

  return (
    <div className="w-full overflow-hidden relative cursor-pointer" onClick={() => (window.location.href = link)}>
      <div
        className={`flex  `}
        onMouseEnter={() => {
          Hoverr(), ExHoverr()
        }}
        onMouseLeave={() => {
          Hoverr(), ExHoverr()
        }}
      >
        <motion.div
          className={`${hidden ? 'opacity-0' : 'opacity-25 '} flex absolute w-full h-full bg-[#000000] `}
          animate={hidden ? 'closed' : 'open'}
          variants={variants}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className={`${reclose ? 'opacity-0' : 'opacity-25 '} flex absolute w-full h-full bg-[#000000] `}
          animate={reclose ? 'reclose1' : 'reclose2'}
          variants={variants}
          transition={{ duration: 0.4 }}
        />
        <div className="flex">
          <img src={img} type={type} style={{ width: '380px', height: '264px' }} />
          <motion.div
            className={`${hidden ? 'opacity-0' : 'opacity-1'} flex absolute ml-[32px] ${
              subText === '' ? 'bottom-[20px]' : 'bottom-[40px]'
            }`}
            animate={hidden ? 'invis' : 'vis'}
            variants={variants}
            transition={{ duration: 0.1 }}
          >
            <Typography className="text-white" variant="body-bold">
              {text}
            </Typography>
          </motion.div>
          <motion.div
            className={`${hidden ? 'opacity-0' : 'opacity-1'} flex absolute ml-[32px] bottom-[20px]`}
            animate={hidden ? 'invis' : 'vis'}
            variants={variants}
            transition={{ duration: 0.1 }}
          >
            <Typography className="text-white" variant="subhead">
              {subText}
            </Typography>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default GirdPic
