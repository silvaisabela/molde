import * as React from 'react'
import { Number, String } from 'prop-types'
import Svg, { Path } from 'react-native-svg'

const propTypes = {
  width: Number,
  height: Number,
  color: String
}

const Add = ({ width = 29, height = 29, color = '#7963FF', ...props }) => {
  return (
    <Svg
      width={ width }
      height={ height }
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        stroke={ color }
        strokeWidth={3}
        strokeLinecap="round"
        d="M1.5 14.5h25.284M14.642 26.784V1.5"
      />
    </Svg>
  )
}

Add.propTypes = propTypes

export { Add }
