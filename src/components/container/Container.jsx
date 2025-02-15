// import React from 'react'

function Container({children}) {
  return (
    <main className="sm:w-md flex flex-col bg-white p-10 gap-5 rounded-xl h-fit w-sm">
       {children}
    </main>
  )
}

export default Container
