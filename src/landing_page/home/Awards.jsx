import React from 'react'

function Awards() {
  return (
    <div className='container p-5'>
      <div className="row p-5">
        <div className="col-6 p-5">
          <img src="/images/largestBroker.svg" alt="largestBroker image" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h3 className='text-dark'>Largest stocks broker in India</h3>
          <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Seccurities</li>
              </ul>
            </div>
          </div>
        <img className='w-75' src="/images/pressLogos.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Awards