import React from 'react'

function Hero() {
  return (
    <div className="container-fluid bg-primary">
      <div className='d-flex justify-content-center'>
        <div className="w-75 p-5 d-flex justify-content-between">
          <h4 className='text-white'>Support Portal</h4>
          <a className='text-white' href="">Track Tickets</a>
        </div>
      </div>
      <div className='d-flex justify-content-center p-5'>
        <div className="row w-75">
          <div className="col">
            <h4 className='text-white'>Search for an answer or browser help topics to create a ticket</h4>
            <input className='w-100 p-3 my-3  rounded form-control' type="text" placeholder='Eg: how do I activate F&S, why is my order getting rejected.' />
            <a className='text-white' href="">Track account opening</a>
            <a className='text-white ms-3' href="">Track segment activation</a>
            <a className='text-white ms-3' href="">Intraday margins</a>
            <a className='text-white ms-3' href="">Kite user manual</a>
          </div>
          <div className="col ms-5">
            <h4 className='text-white'>Featured</h4>
            <ol type="1">
              <li className='text-white'><a className='text-white' href="">Current Takeovers and Delisting - January 2024</a></li>
              <li className='text-white lh-lg'><a className='text-white' href="">Latest Intraday leverages - MIS & CO</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero