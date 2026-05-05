import React from 'react'

function CreateTicket() {
  return (
    <div className="container p-5">
      <div className="row ms-3 p-5">
        <h3 className='text-dark'>To create a ticket, select a relevant topic</h3>
      </div>
      <div className="row ms-3 px-5">
        <div className="col-4 px-3">
          <h4><i className="fa-solid fa-circle-plus"></i>Account Opening</h4>
          <ul className='list-unstyled lh-lg mt-5'>
            <li><a className='text-decoration-none' href="">Online Account Opening</a></li>
            <li><a className='text-decoration-none' href="">Offline Account Opening</a></li>
            <li><a className='text-decoration-none' href="">Company, Partnership and HUF Account Opening</a></li>
            <li><a className='text-decoration-none' href="">NRI Account Opening</a></li>
            <li><a className='text-decoration-none' href="">Charges at Zerodha</a></li>
            <li><a className='text-decoration-none' href="">Zerodha IFSC FIRST BANK 3-in-1 Account</a></li>
            <li><a className='text-decoration-none' href="">Getting Started</a></li>
          </ul>
        </div>
        <div className="col-4">
          <h4><i class="fa-solid fa-user"></i>Your Zerodha Account</h4>
          <ul className='list-unstyled lh-lg mt-5'>
            <li><a className='text-decoration-none' href="">Login Credentials</a></li>
            <li><a className='text-decoration-none' href="">Account Modification and segment Addition</a></li>
            <li><a className='text-decoration-none' href="">DP ID bank details</a></li>
            <li><a className='text-decoration-none' href="">Your Profile</a></li>
            <li><a className='text-decoration-none' href="">Transfer and conversion of shares</a></li>
          </ul>
        </div>
        <div className="col-4">
          <h4>Your Zerodha Account</h4>
          <ul className='list-unstyled lh-lg mt-5'>
            <li><a className='text-decoration-none' href="">Margin/leverge, Product and Order types</a></li>
            <li><a className='text-decoration-none' href="">Kite Web and Mobile</a></li>
            <li><a className='text-decoration-none' href="">Trading FAQs</a></li>
            <li><a className='text-decoration-none' href="">Corporate Action</a></li>
            <li><a className='text-decoration-none' href="">Sentinel</a></li>
            <li><a className='text-decoration-none' href="">Kite API</a></li>
            <li><a className='text-decoration-none' href="">Pi and other Platform</a></li>
            <li><a className='text-decoration-none' href="">Stockreports+</a></li>
            <li><a className='text-decoration-none' href="">GTT</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket