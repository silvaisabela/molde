import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const propTypes = {
  width: Number,
  height: Number,
  color: String
}

const YellowShape = ({ width = 91, height = 59, color = '#F1A61B', ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M82.886 0c0 11.63 9.973 25.497 4.444 36.466C81.32 48.39 68.118 56.579 54.807 56.99c-12.402.384-21.04-10.715-30.679-18.57C15.317 31.24 3.99 25.296 2.131 14.06 1.307 9.08 4.645 2.529 4.645 0"
        stroke={ color }
        strokeWidth={4}
      />
    </Svg>
  )
}

YellowShape.propTypes = propTypes

export { YellowShape }
