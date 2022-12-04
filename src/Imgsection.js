import React, { useContext } from 'react'
import { MyContext } from './MyContext'





export default function Imgsection(props) {
  let context = useContext(MyContext)
  return (
    <div className='imgSection'>
      <div>
        <img className='profImg' src={props.img} alt="" />
      </div>

      <div className='userNameCOntainer'>
        <div style={{display: "flex", width: "100%", justifyContent: "space-between", flexWrap: "wrap"}}>
          <div>
            <h1 className='octocatName' style={context.modeClick ? {color: "#2B3442"} : {color: "#FFFFFF"}}>{props.name}</h1>
            <p className='hashtag'> @{props.hashtag} </p>
          </div>  
          <div>
            <p className='joined' style={context.modeClick ? {color: "#697C9A"} : {color: "#FFFFFF"}}> Joined {props.joined}</p>
          </div>
        </div>

        <div style={{marginTop: "25px"}}>
          <p className='bio' style={context.modeClick ? {color: "#4B6A9B"} : {color: "#FFFFFF"}}>{props.bio}</p>
        </div>

      </div>
        
      

    </div>
  )
}
