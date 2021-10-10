import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { number } from 'prop-types'

const propTypes = {
  width: number,
  height: number
}

const Logo = ({ width = 32, height = 43, ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M26.625 37.638c-.929 3.285-3.059 5.347-6.42 5.331a6.085 6.085 0 01-6.057-6.112c.015-3.36 4.238-5.366 4.852-7.824 1.872-7.5 9.754 1.08 7.625 8.605z"
        fill="#2DC1A6"
      />
      <Path
        d="M23.268 19.434c-4.37-.128-6.964 10.95-11.48 11.902-7.517.963-11.19-11.385-9.456-18.286C4.066 6.15 11.224.962 17.949 1.855c14.965 1.986 15.415 17.875 5.32 17.58z"
        fill="#7963FF"
      />
    </Svg>
  )
}

Logo.propTypes = propTypes

export { Logo }
