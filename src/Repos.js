import React, { useContext } from 'react'
import { MyContext } from './MyContext'

export default function Repos(props) {
  let context = useContext(MyContext)
  return (
    <div className='reposBox'>
      <p className='repos' style={context.modeClick ? {color: "#4B6A9B"} : {color: " #FFFFFF"}}>Repos</p>
      <p className='reposNumbers' style={context.modeClick ? {color: "#2B3442"} : {color: " #FFFFFF"}}>{props.repos} </p>
    </div>
  )
}
