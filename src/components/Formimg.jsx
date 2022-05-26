import React from 'react'
import PropTypes from 'prop-types'

const Formimg = ({handleSumit}) => {
  return (
    <>
       <form onSubmit={handleSumit}>
        <label className='w-75'>
            Buscar: <input className='w-100' type="text" name='inputTex'/> {""}
        </label>
        <button type="submit" className='btn btn-warning mx-2'>
            <span className="material-icons">search</span>
        </button>
    </form>
    </>
  )
}

Formimg.propTypes = {
    handleSumit: PropTypes.func
}

export default Formimg
