import React from 'react'

function Counter(props) {
    console.log("Counter Component",props.salary)
  return (

    <div>{props.salary}</div>
  )
}
export default React.memo(Counter)
