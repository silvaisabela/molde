import * as React from 'react'
import { number, string } from 'prop-types'
import Svg, { Path } from 'react-native-svg'

const propTypes = {
  width: number,
  height: number,
  color: string
}

const Plus = ({ width = 21, height = 21, color = '#231F20', ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        d="M1 10.879h19M10.985 20V1"
      />
    </Svg>
  )
}

Plus.propTypes = propTypes

export { Plus }
