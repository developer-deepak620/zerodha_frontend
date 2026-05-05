import React from 'react'

function LeftImgSection({imageUrl, productName, productDescription, tryDemo, learnMore, arrowOne, arrowTwo}) {
  return (
    <div className='container px-5'>
      <div className="row px-5">
        <div className="col-8 p-5 text-center">
          <img className='h-100' src={imageUrl} />
        </div>
        <div className="col-4 p-5 mt-5">
          <h3 className='text-dark'>{productName}</h3>
          <p className='mt-4 fs-6'>{productDescription}</p>
          <div className=" d-flex gap-5 mb-4">
            <a className='text-decoration-none' href="">{tryDemo}{arrowOne}</a>
            <a className='text-decoration-none' href="">{learnMore}{arrowTwo}</a>
          </div>
          <div className='d-flex justify-content-between'>
            <img src="/images/googlePlayBadge.svg" alt="googlePlayBadge" />
            <img src="/images/appstoreBadge.svg" alt="appstoreBadge" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftImgSection