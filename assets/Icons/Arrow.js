import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { number, string } from 'prop-types'

const propTypes = {
  width: number,
  height: number,
  color: string
}

const Arrow = ({ width = 10, height = 13, color = '#2B2B2B', ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 12l7-5.5L1 1"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

Arrow.propTypes = propTypes

export { Arrow }
