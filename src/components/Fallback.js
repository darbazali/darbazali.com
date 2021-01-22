import React from 'react'

import Spinner from '../assets/ICON/spinner.gif'

const Fallback = () => {
  return (
    <section className='full-screen'>
      <img src={Spinner} width='800' height='600' alt='Loading...' />
    </section>
  )
}

export default Fallback
