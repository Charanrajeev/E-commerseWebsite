import React from 'react'

function Control() {
    const useRef= React.createRef(null)
  return (
    <div>
        <input ref={useRef}/>

    </div>
  )
}

export default Control