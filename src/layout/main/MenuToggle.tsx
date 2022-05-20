import * as React from 'react'
import { motion } from 'framer-motion'

const MenuToggle = ({
  toggle,
  isOpen,
  width = 24,
  height = 14,
  strokeWidth = 2,
  color = 'black',
  transition = null,
  lineProps = null,
  ...props
}) => {
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  }
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  }
  const unitHeight = 4
  const unitWidth = (unitHeight * (width as number)) / (height as number)
  const variant = isOpen ? 'opened' : 'closed'
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition,
    ...lineProps,
  }
  return (
    <button
      className={`hover:cursor-pointer border-none outline-none py-[29px] md:hidden`}
      onClick={toggle}
    >
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
      >
        <motion.line x1="0" x2={unitWidth} y1="0" y2="0" strokeLinecap="round" variants={top} {...lineProps} />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={center}
          {...lineProps}
        />
        <motion.line x1="0" x2={unitWidth} strokeLinecap="round" y1="4" y2="4" variants={bottom} {...lineProps} />
      </motion.svg>
    </button>
  )
}

export default MenuToggle
