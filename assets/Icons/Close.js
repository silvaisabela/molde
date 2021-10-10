import * as React from 'react'
import { number, string } from 'prop-types'
import Svg, { Path } from 'react-native-svg'

const propTypes = {
  width: number,
  height: number,
  color: string
}

const Close = ({ width = 40, height = 40, color = '#231F20', ...props }) => {
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
        strokeWidth={3}
        strokeLinecap="round"
        d="M10.934 28.819l18.585-17.144M28.923 28.937L11.779 10.352"
      />
    </Svg>
  )
}

Close.propTypes = propTypes

export { Close }
