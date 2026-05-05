import React from 'react'

function Education() {
  return (
    <div className='container p-5'>
      <div className="row px-5">
        <div className="col-6 p-5">
          <img src="/images/education.svg" alt="" />
        </div>
        <div className="col-6 p-5">
          <h1 className='fs-4 mb-5 text-dark'>Free and open market education</h1>
          <p className='mb-4 '>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a className='text-decoration-none text-primary' href="">Varsity<i className="fa-solid fa-arrow-right text-primary"></i></a>
          <p className='mb-4 mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a className='text-decoration-none text-primary' href="">TradingQ&A <i className="fa-solid fa-arrow-right text-primary"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education