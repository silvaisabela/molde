import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { number } from 'prop-types'

const propTypes = {
  width: number,
  height: number
}

const OrganicBackgroung = ({ height = 336, ...props }) => {
  return (
    <Svg
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M268.953 110.944c24.038-12.386 51.952-17.07 77.563-8.465 26.481 8.899 46.365 29.77 59.353 54.471 13.946 26.524 26.288 57.891 14.149 85.324-11.842 26.764-45.33 32.02-71.707 44.76-27.648 13.354-54.849 41.515-83.327 30.123-28.414-11.366-30.499-49.754-39.097-79.095-6.925-23.635-12.773-47.575-4.864-70.921 8.207-24.225 25.17-44.47 47.93-56.197z"
        stroke="#EBA21C"
        strokeWidth={5}
      />
      <Path
        clipRule="evenodd"
        d="M57.38 23.138c-3.626-32.836 16.027-67.58 44.51-84.302 25.969-15.246 56.688 3.75 86.585 7.338 26.763 3.21 55.978-4.838 76.814 12.267 23.368 19.183 41.519 50.191 35.322 79.788-5.908 28.22-39.579 37.61-63.323 53.959-19.196 13.218-36.493 31.589-59.784 30.811-23.754-.795-40.837-19.592-59.115-34.786-23.769-19.76-57.614-34.348-61.008-65.075z"
        stroke="#2DC1A6"
        strokeWidth={5}
      />
      <Path
        clipRule="evenodd"
        d="M69.954 98.006c28.042-.532 39.671 35.17 59.693 54.894 20.397 20.094 53.228 31.488 56.883 59.947 3.844 29.935-16.471 57.956-39.207 77.697-21.19 18.398-49.645 27.54-77.37 23.521-24.709-3.581-41.544-24.136-57.852-43.12-14.66-17.063-29.174-35.563-29.1-58.098.072-22.479 15.926-39.83 29.474-57.723 16.96-22.4 29.463-56.586 57.479-57.118z"
        stroke="#7963FF"
        strokeWidth={5}
      />
    </Svg>
  )
}

OrganicBackgroung.propTypes = propTypes

export { OrganicBackgroung }
