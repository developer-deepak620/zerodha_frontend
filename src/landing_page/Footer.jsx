import React from 'react'
import "../index.css";

function Footer() {
  return (
    <div className='container-fluid border-top pt-5 footer-div mt-5'>
      <div className="row">
        <div className="col">
          <img className='w-50' src="/images/logo.svg" alt="logo" />
          <p className='mt-3' style={{ fontSize: "10px" }}>© 2010 - 2026, Zerodha Broking Ltd.</p>
          <p style={{ fontSize: "14px", marginTop: "-10px" }}>All rights reserved.</p>
          <div>
            <a className='fs-5' href=""><i class="fa-brands fa-x-twitter"></i></a>
            <a className='fs-5 ps-2' href=""><i class="fa-brands fa-square-facebook"></i></a>
            <a className='fs-5 ps-2' href=""><i class="fa-brands fa-instagram"></i></a>
            <a className='fs-5 ps-2' href=""><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <hr />
          <div>
            <a className='fs-5' href=""><i class="fa-brands fa-youtube"></i></a>
            <a className='fs-5 ps-2' href=""><i class="fa-brands fa-whatsapp"></i></a>
            <a className='fs-5 ps-2' href=""><i class="fa-brands fa-telegram"></i></a>
          </div>
          <div className='mt-4'>
            <img className='w-50' src="/images/googlePlayBadge.svg" alt="googlePlayBadge image" />
            <img className='w-50' src="/images/appstoreBadge.svg" alt="appstoreBadge image" />
          </div>
        </div>
        <div className="col">
          <h1 className='fs-5 text-dark'>Account</h1>
          <p>Open demat account</p>
          <p>Minor demat account</p>
          <p>NRI demat account</p>
          <p>HUF demat account</p>
          <p>Commodity</p>
          <p>Dematerialisation</p>
          <p>Fund transfer</p>
          <p>MTF</p>
        </div>
        <div className="col">
          <h1 className='fs-5 text-dark'>Support</h1>
          <p>Contact us</p>
          <p>Support portal</p>
          <p>How to file a complaint?</p>
          <p>Status of your complaints</p>
          <p>Bulletin</p>
          <p>Circular</p>
          <p>Z-Connect blog</p>
          <p>Downloads</p>
        </div>
        <div className="col">
          <h1 className='fs-5 text-dark'>Company</h1>
          <p>About</p>
          <p>Philosophy</p>
          <p>Press & media</p>
          <p>Careers</p>
          <p>Zerodha Cares (CSR)</p>
          <p>Zerodha.tech</p>
          <p>Open source</p>
          <p>Referral program</p>
        </div>
        <div className="col">
          <h1 className='fs-5 text-dark'>Quick links</h1>
          <p>Upcoming IPOs</p>
          <p>Brokerage charges</p>
          <p>Market holidays</p>
          <p>Economic calendar</p>
          <p>Calculators</p>
          <p>Markets</p>
          <p>Sectors</p>
          <p>Gift Nifty</p>
        </div>
      </div>
      <p className='fontt'>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
      <p className='fontt'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
      <p className='fontt'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
      <p className='fontt'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
      <p className='fontt'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
      <p className='fontt'>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
      <p className='fontt'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      <p className='fontt'>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
      <p className='fontt'>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
      <div className="d-flex justify-content-between" style={{ padding: "0 100px 20px 100px" }}>
        <a className='text-decoration-none text-secondary fontt' href="">NSE</a>
        <a className='text-decoration-none text-secondary fontt' href="">BSE</a>
        <a className='text-decoration-none text-secondary fontt' href="">MCX</a>
        <a className='text-decoration-none text-secondary fontt' href="">Terms & conditions</a>
        <a className='text-decoration-none text-secondary fontt' href="">Policies & procedures</a>
        <a className='text-decoration-none text-secondary fontt' href="">Privacy policy</a>
        <a className='text-decoration-none text-secondary fontt' href="">Disclosure</a>
        <a className='text-decoration-none text-secondary fontt' href="">For investor's attention</a>
        <a className='text-decoration-none text-secondary fontt' href="">Investor charter</a>
      </div>
    </div>
  )
}

export default Footer