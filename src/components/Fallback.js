import React from 'react'

import Spinner from '../assets/ICON/spinner.gif'

const Fallback = () => {
  return (
    <div>
      <img src={Spinner} alt='Loading...' />
    </div>
  )
}

export default Fallback
