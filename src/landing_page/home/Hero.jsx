import React from 'react'

function Hero() {
  return (
    <div className='container p-5'>
      <div className="row">
        <div className="col text-center">
          <img className='w-75' src="/images/homeHero.png" alt="Hero Image" />
          <h2 className='mt-5 text-dark'>Invest in everything</h2>
          <p className='mt-3 fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button className='mt-3 btn btn-primary fs-5 ps-4 pe-4'>Sign up for free</button>
        </div>
      </div>
    </div>
  )
}

export default Hero