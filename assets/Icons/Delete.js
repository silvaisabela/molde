import * as React from "react"
import { number, string } from 'prop-types'
import Svg, { Path } from 'react-native-svg'

const propTypes = {
  width: number,
  height: number,
  color: string
}

const Delete = ({width = 12, height = 13, color = '#231F20', ...props}) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 11.032l9.942-9.943M11 10.943L1.058 1"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}
Delete.propTypes = propTypes

export { Delete }

