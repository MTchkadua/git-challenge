import React, { useContext } from 'react'
import { MyContext } from './MyContext'

export default function BioMobile(props) {
    let context = useContext(MyContext)
  return (
    <div>
      <p className='bioMobileTxt' style={context.modeClick ? {color: "#4B6A9B"} : {color: "#FFFFFF"}}> {props.bio2} </p>
    </div>
  )
}
