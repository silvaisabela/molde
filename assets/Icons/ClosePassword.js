import * as React from 'react'
import { Number, String } from 'prop-types'
import Svg, { Path } from 'react-native-svg'

const propTypes = {
  width: Number,
  height: Number,
  color: String
}

const ClosePassword = ({ width = 22, height = 12, color = '#231F20', ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.942 6.178l1.075 1.075c4.43 4.43 11.636 4.43 16.066 0l1.07-1.075-1.075-1.074c-4.43-4.43-11.636-4.43-16.065 0l-1.07 1.074zm9.106 5.176a12.105 12.105 0 01-8.585-3.552l-1.35-1.349a.394.394 0 010-.554l1.35-1.35c4.733-4.732 12.436-4.732 17.17 0l1.349 1.35a.394.394 0 010 .554l-1.35 1.35a12.105 12.105 0 01-8.584 3.551z"
        fill={color}
      />
      <Path
        d="M11.048 3.205a2.976 2.976 0 00-2.974 2.973 2.976 2.976 0 002.974 2.974 2.976 2.976 0 002.973-2.974 2.976 2.976 0 00-2.973-2.973zm0 6.726a3.757 3.757 0 01-3.753-3.753 3.757 3.757 0 013.753-3.753A3.76 3.76 0 0114.8 6.178a3.755 3.755 0 01-3.752 3.753z"
        fill={color}
      />
      <Path d="M1 1l20 10" stroke={color} strokeWidth={1.3} />
    </Svg>
  )
}

ClosePassword.propTypes = propTypes

export { ClosePassword }
