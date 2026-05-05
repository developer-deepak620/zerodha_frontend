import React from 'react'

function Hero() {
  return (
    <div className='container p-5 mb-5 border-bottom'>
      <div className="row p-5">
        <div className="col text-center">
          <h1 className='mt-5 fs-4 text-dark'>Zerodha Products</h1>
          <p className='mt-3 fs-5 text-dark'>Sleek, modern, and intuitive trading platforms</p>
          <p className='mt-3 fs-6 text-dark'>Check out our <a className='text-decoration-none' href="#">investment offerings <i className="fa-solid fa-arrow-right text-primary"></i></a></p>
        </div>
      </div>
    </div>
  )
}

export default Hero