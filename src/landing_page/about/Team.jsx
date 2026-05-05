import React from 'react'

function Team() {
  return (
    <div className='container pt-5'>
      <div className="row">
        <div className="col-6 d-flex flex-column align-items-center mt-5 pt-5">
          <img className='img-fluid w-50 rounded-circle mb-3' src="/images/deepak_zerodha.jpeg" alt="founder_image"/>
          <h3 className='fs-5'>Deepak Kumar</h3>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6">
          <h1 className='mb-5 text-dark fs-3 ps-4'>People</h1>
          <p className='fs-5'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p className='fs-5'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p className='fs-5'>Playing basketball is his zen.</p>
          <p>Connect on <a className='text-decoration-none' href="">Homepage</a> / <a className='text-decoration-none' href="">TradingQnA</a> / <a className='text-decoration-none' href="">Twitter</a></p>
        </div>
      </div>
    </div>
  )
}

export default Team