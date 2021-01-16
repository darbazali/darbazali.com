import React from 'react'
import CenterdContainer from './CenterdContainer'
import Spinner from '../assets/ICON/spinner.gif'

const Fallback = () => {
  return (
    <CenterdContainer minHeight='100vh'>
      <img src={Spinner} alt='Loading...' />
    </CenterdContainer>
  )
}

export default Fallback
