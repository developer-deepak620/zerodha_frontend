import React from 'react'

function Stats() {
  return (
    <div className='container p-5'>
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className='fs-2 mb-5 text-dark'>Trust with confidence</h1>
          <h2 className='fs-4 text-dark'>Customer-first always</h2>
          <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          <h2 className='fs-4 text-dark'>No spam or gimmicks</h2>
          <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
          <h2 className='fs-4 text-dark'>The Zerodha universe</h2>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h2 className='fs-4 text-dark'>Do better with money</h2>
          <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-6">
          <img className='w-100' src="/images/ecosystem.png" alt="" />
          <div className='d-flex justify-content-evenly'>
            <a className='text-decoration-none text-primary' href="">Explore our products<i className="fa-solid fa-arrow-right text-primary"></i></a>
            <a className='text-decoration-none text-primary' href="">Try Kite demo<i className="fa-solid fa-arrow-right text-primary"></i></a>
          </div>
        </div>
        <div className="row">
          <img className='w-75 m-auto' src="/images/pressLogos.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Stats