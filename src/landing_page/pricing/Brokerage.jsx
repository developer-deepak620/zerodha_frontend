import React from 'react'

function Brokerage() {
  return (
    <div className="container p-5 mt-5">
      <div className="row mt-5 p-5">
        <div className="col-8">
          <h4 className='text-center'><a className='text-decoration-none' href="">Brokerage Calculator</a></h4>
          <ul className='lh-lg mt-4'>
            <li>Call &amp; Trade and RMS auto-squareoff. Additional charges of &#8377;50 + GST per order.</li>
            <li>Digital contract notes will be sent vie e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged &#8377;20 per contract note. Courier charges apply.</li>
            <li>For NRI account (Non-PIS), 0.5% or &#8377;100 per excuted order for equality (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or &#8377;200 per excuted order for equality (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged &#8377;40 per excuted order instead of &#8377;20 per excuted order.</li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className='text-center'><a className='text-decoration-none' href="">List of charges</a></h4>
        </div>
      </div>
    </div>
  )
}

export default Brokerage