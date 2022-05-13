import { Typography } from 'components'
import { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'

export const GirdPic = () => {
  const [hidden, sethidden] = useState(true)
  const [reclose, setReclose] = useState(false)

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
    <div className="mx-auto w-full md:w-[380px] overflow-hidden relative">
      <div
        className={`flex  `}
        onMouseEnter={() => {
          Hoverr(), ExHoverr()
        }}
        onMouseLeave={() => {
          Hoverr(), ExHoverr()
        }}
      >
        <motion.a
          className={`${hidden ? 'opacity-0' : 'opacity-25 '} flex absolute w-full h-full bg-[#000000] `}
          animate={hidden ? 'closed' : 'open'}
          variants={variants}
          transition={{ duration: 0.4 }}
        />
        <motion.a
          className={`${reclose ? 'opacity-0' : 'opacity-25 '} flex absolute w-full h-full bg-[#000000] `}
          animate={reclose ? 'reclose1' : 'reclose2'}
          variants={variants}
          transition={{ duration: 0.4 }}
        />
        <div className="flex">
          <img src="static/gird1.svg" />
          <motion.a
            className={`${hidden ? 'opacity-0' : 'opacity-1'} flex absolute ml-[32px] mt-[176px]`}
            animate={hidden ? 'invis' : 'vis'}
            variants={variants}
            transition={{ duration: 0.1 }}
          >
            <Typography className="text-white" variant="body-bold">
              Сонгуулийн дата хакатон
            </Typography>
          </motion.a>
          <motion.a
            className={`${hidden ? 'opacity-0' : 'opacity-1'} flex absolute ml-[32px] mt-[210px]`}
            animate={hidden ? 'invis' : 'vis'}
            variants={variants}
            transition={{ duration: 0.1 }}
          >
            <Typography className="text-white" variant="subhead">
              Залуусын оролцоо
            </Typography>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default GirdPic
