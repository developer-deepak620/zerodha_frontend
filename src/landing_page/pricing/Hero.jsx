import React from 'react'

function Hero() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <h3 className='text-dark'>Charges</h3>
        <p className='fs-5'>List of all charges and taxes</p>
      </div>
      <div className="row mt-5 p-5 text-center">
        <div className="col-4">
          <img className='w-75' src="/images/pricingMF.svg" alt="pricingMF" />
          <h3 className='text-dark pt-3 pb-3'>Free equity delivery</h3>
          <p className='fs-6'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4">
          <img className='w-75' src="/images/intradayTrades.svg" alt="pricingMF" />
          <h3 className='text-dark pt-3 pb-3'>Intraday and F&O trades</h3>
          <p className='fs-6'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4">
          <img className='w-75' src="/images/pricingMF.svg" alt="pricingMF" />
          <h3 className='text-dark pt-3 pb-3'>Free direct MF</h3>
          <p className='fs-6'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero