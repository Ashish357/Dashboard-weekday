import React from 'react'

const Shimmer = () => {
  return (
    <div className='shimmer-container'>
        {Array(10)
            .fill("")
            .map((e,i)=>(
            <div key={i} className='shimmer'>
                <div className='shimmer-header'></div>
                <div className="shimmer-content"></div>
            </div>
        ))}
    </div>
  )
}

export default Shimmer