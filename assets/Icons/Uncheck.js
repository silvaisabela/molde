import * as React from 'react'
import { Number, String } from 'prop-types'
import Svg, { Path, Circle } from 'react-native-svg'

const propTypes = {
  width: Number,
  height: Number,
  color: String
}

const Uncheck = ({ width = 17, height = 17, color = '#E84432', ...props }) => {
  return (
      <Svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M6 11l4.836-4.836M10.863 10.836L6.027 6"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Circle cx={8.5} cy={8.5} r={7.5} stroke={color} strokeWidth={2} />
      </Svg>
  )
}
Uncheck.propTypes = propTypes
export default Uncheck
