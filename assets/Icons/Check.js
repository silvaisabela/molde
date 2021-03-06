import * as React from 'react'
import { number, string } from 'prop-types'
import Svg, { Path } from 'react-native-svg'

const propTypes = {
  width: number,
  height: number,
  color: string
}

const Check = ({ width = 17, height = 17, color = '#2DC1A6', ...props }) => {
  return (
        <Svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M4.757 9.405a.97.97 0 01-.184-.287.978.978 0 01.179-1.035l.047-.049a.976.976 0 011.329-.017l.005.004c.267.257.719.676 1.015.94l.255.228 3.117-3.27a.968.968 0 01.675-.293h.004a1.03 1.03 0 01.37.065.943.943 0 01.313.197l.022.02a.983.983 0 01.29.672v.032a1 1 0 01-.15.51.963.963 0 01-.115.147l-3.765 3.952a.946.946 0 01-.484.279 1 1 0 01-.186.026h-.018a.991.991 0 01-.171-.01l-.015-.003a.998.998 0 01-.336-.123l-.009-.005a.991.991 0 01-.142-.105l-.01-.008c-.218-.203-.455-.41-.695-.618a22.177 22.177 0 01-1.34-1.248zM8.5 0c2.346 0 4.473.952 6.012 2.488A8.486 8.486 0 0117 8.5a8.487 8.487 0 01-2.488 6.012A8.486 8.486 0 018.5 17a8.487 8.487 0 01-6.012-2.488A8.487 8.487 0 010 8.5c0-2.346.952-4.472 2.488-6.012A8.487 8.487 0 018.5 0zm4.906 3.594A6.915 6.915 0 008.5 1.563c-1.916 0-3.65.776-4.906 2.031A6.915 6.915 0 001.563 8.5c0 1.916.776 3.65 2.031 4.906A6.916 6.916 0 008.5 15.437c1.916 0 3.65-.776 4.906-2.031A6.916 6.916 0 0015.437 8.5c0-1.916-.776-3.65-2.031-4.906z"
                fill={color}
            />
        </Svg>
  )
}

Check.propTypes = propTypes

export { Check }
