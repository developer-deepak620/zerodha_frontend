import React from 'react'

function Pricing() {
  return (
    <div className='container p-5'>
      <div className="row px-5">
        <div className="col-6 p-5">
          <h1 className='fs-4 mb-3 text-dark'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a className='text-decoration-none text-primary' href="">See pricing <i className="fa-solid fa-arrow-right text-primary"></i></a>
        </div>
        <div className="col-6 p-5">
          <div className="row text-center">
            <div className="col p-2 border">
              <img src="/images/pricingMF.svg" alt="Free account opening" className='w-50' />
              <p className="mb-0">Free account opening</p>
            </div>
            <div className="col p-2 border">
              <img src="/images/pricingMF.svg" alt="Free account opening" className='w-50' />
              <p className="mb-0">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col p-2 border">
              <img src="/images/intradayTrades.svg" alt="Free account opening" className='w-50' />
              <p className="mb-0">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing