import * as React from 'react'
import { Number, String } from 'prop-types'
import Svg, { Path } from 'react-native-svg'

const propTypes = {
  width: Number,
  height: Number,
  color: String
}

const PurpleShape = ({ width = 129, height = 71, color = '#7963FF', ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.37.34c0 10.5-1.202 22.52 4.688 32 9.407 15.143 31.189 13.077 48.064 19.151 16.565 5.963 32.412 23.134 48.381 15.566 15.954-7.561 14.355-30.13 18.344-47.189 1.519-6.496 4.271-14.028 4.271-19.528"
        stroke={color}
        strokeWidth={4}
      />
    </Svg>
  )
}

PurpleShape.propTypes = propTypes

export { PurpleShape }
