// import React from 'react'

function Wrapper({children}) {
  return (
    <div className=" mx-auto w-fit min-h-screen sm:mt-[100px] mt-[50px]">
      {children}
    </div>
  )
}

export default Wrapper
