import React from 'react'

const SectionBox = ({children,className='!m-4 ml-10 p-4 shadow-md rounded-lg ',themeColor  } ) => {
  return (
    <div
    
    style={{
        backgroundColor:`${themeColor}`
    }}
    
    className={className}>
    {children}
    </div>
  )
}

export default SectionBox