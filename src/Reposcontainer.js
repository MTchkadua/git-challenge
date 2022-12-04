import React, { useContext } from 'react'
import Repos from './Repos'
import Followers from './Followers'
import Following from './Following'
import { MyContext } from './MyContext'

export default function Reposcontainer(props) {
  let context = useContext(MyContext)
  return (
    <div className='reposContainer'  style={context.modeClick ? {backgroundColor: "#F6F8FF"} : {backgroundColor: "#141D2F"}}>
      <Repos repos = {props.repos}/>
      <Followers followers= {props.followers} />
      <Following following = {props.following}/>
    </div>
  )
}
