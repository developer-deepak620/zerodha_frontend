import React from 'react'

function NotFound() {
    return (
        <div className='container p-5'>
            <div className="row">
                <div className="col text-center">
                    <h1 className='mt-5 fs-4 text-dark'>404 Not Found</h1>
                    <p className='mt-3 fs-6'>Sorry, the page you are looking for does not exists.</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound