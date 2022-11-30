import React from 'react'
import { useContext } from './Main'
function ComponentB(props) {
  return (
    <div>ComponentB {props.name}
    <useContext.Consumer>
        {
            obj=>obj
        }
    </useContext.Consumer></div>
  )
}

export default ComponentB