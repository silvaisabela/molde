import * as React from 'react'
import { number, string } from 'prop-types'
import Svg, { Path } from 'react-native-svg'

const propTypes = {
  width: number,
  height: number,
  color: string
}

const ArrowLeft = ({ width = 29, height = 16, color = '#231F20', ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM29 7H1v2h28V7z"
        fill={color}
      />
    </Svg>
  )
}

ArrowLeft.propTypes = propTypes

export { ArrowLeft }
