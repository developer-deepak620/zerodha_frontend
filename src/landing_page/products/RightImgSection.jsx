import React from 'react'

function RightImgSection({productName, productDescription, learnMore, arrow, imageUrl}) {
  return (
    <div className='container px-5'>
      <div className="row px-5 mt-5 d-flex justify-content-center align-items-center">
        <div className="col-4 p-5 mt-5">
          <h3 className='text-dark'>{productName}</h3>
          <p className='mt-4 fs-6'>{productDescription}</p>
          <a className='text-decoration-none' href="">{learnMore}{arrow}</a>
        </div>
        <div className="col-8 p-5 text-center">
          <img className='h-100' src={imageUrl} />
        </div>
      </div>
    </div>
  )
}

export default RightImgSection