import React, { useContext } from 'react'
import Search from './Search'
import Reposcontainer from './Reposcontainer'
import Imgsection from './Imgsection'
import { MyContext } from './MyContext'
import Media from './Media'
import BioMobile from './BioMobile'

export default function Container(props) {
 const context = useContext(MyContext)

  return (
  <div>
    <Search search = {props.search} value={props.value} click={props.click} result = {props.result} />
    <div className='container' style={context.modeClick ? {backgroundColor: "#F2F2F2"} : {backgroundColor: "#1E2A47"}}>
      <Imgsection img = {props.img} name={props.name} hashtag = {props.hashtag} joined = {props.joined} bio = {props.bio}/>
      <BioMobile bio2={props.bio2} />
      <Reposcontainer repos = {props.repos} followers={props.followers}  following = {props.following}/>
      <Media location = {props.location} link={props.link} twitter = {props.twitter} building={props.building} />
    </div>
  </div>
    
  )
}
