import React from 'react'
import "../../index.css"

function Universe() {
  return (
    <div className='container px-5'>
      <div className="row px-5">
        <h3 className='text-center mb-3 text-dark'>The Zerodha Universe</h3>
        <p className='text-center mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 p-3 text-center">
          <img className='mb-2 img' src="/images/zerodhaFundhouse.png" alt="zerodhaFundhouse" />
          <p className='fontt m-1'>Our asset management venture </p>
          <p className='fontt m-1'> that is creating simple and transparent index </p>
          <p className='fontt m-1'> funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 text-center">
          <img className='img' src="/images/sensibullLogo.svg" alt="sensibullLogo" />
          <p className='fontt m-1'>Options trading platform that lets you</p>
          <p className='fontt m-1'>create strategies, analyze positions, and examine</p>
          <p className='fontt m-1'>data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3 text-center">
          <img className='img' src="/images/tijori.svg" alt="tijori" />
          <p className='fontt m-1'>Investment research platform</p>
          <p className='fontt m-1'>that offers detailed insights on stocks,</p>
          <p className='fontt m-1'>sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 text-center">
          <img className='img' src="/images/streakLogo.png" alt="streakLogo" />
          <p className='fontt m-1'>Systematic trading platform</p>
          <p className='fontt m-1'>that allows you to create and backtest</p>
          <p className='fontt m-1'>strategies without coding.</p>
        </div>
        <div className="col-4 p-3 text-center">
          <img className='img' src="/images/smallcaseLogo.png" alt="smallcaseLogo" />
          <p className='fontt m-1'>Thematic investing platform</p>
          <p className='fontt m-1'>that helps you invest in diversified</p>
          <p className='fontt m-1'>baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 text-center">
          <img className='img' src="/images/dittoLogo.png" alt="dittoLogo" />
          <p className='fontt m-1'>Personalized advice on life</p>
          <p className='fontt m-1'>and health insurance. No spam</p>
          <p className='fontt m-1'>and no mis-selling.</p>
        </div>
      </div>
      <div className='text-center pb-4'>
        <button className='mt-3 btn btn-primary fs-5 ps-4 pe-4'>Sign up for free</button>
      </div>
    </div>
  )
}

export default Universe