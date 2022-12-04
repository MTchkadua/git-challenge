import './Reset.css';
import './App.css';
import { MyContext } from './MyContext';
import React, { useEffect, useState } from 'react'
import ModeSection from './ModeSection';
import Container from './Container';
import { format } from 'date-fns'


function App() {
  const [counter, setCounter] = useState(2)
  const [modeClick, setModeClick] = useState(true)

  const [search, setSearch]=useState("")
  const [user, setUser] = useState("octocat")
  const [show, setShow] = useState(false)
  const [data, setData] = useState()
  const [result, setResult] = useState("")

  

  function counterPlus(){
    if (counter%2===0){
      setModeClick(false)
    }else{
      setModeClick(true)
    }
    // console.log(modeClick)
    setCounter(counter+1)
    // console.log(counter)
  }

  
  function getSearchValue(e){
    setSearch(e.target.value)
  }

  function changeRepos(){
   setUser(search)
   setSearch("")
   if(data.message !== "Not Found"){
    setResult("")
   }

  }
 

 

  useEffect(()=>{
    fetch(`https://api.github.com/users/${user}`).then((response)=> response.json()).then((data)=>{
      console.log(data)
      if (data.message === "Not Found") {
        setShow(false)
        setUser("octocat")
        setResult("No result")
      }else{
        setShow(true)
        console.log(show)
        setData(data)
      }
    })
    
  },[user, show, result])

 
  
  return (
    <MyContext.Provider value = {{modeClick: modeClick}}>

      <div className='app' style={modeClick ? {backgroundColor: "#F2F2F2"} : {backgroundColor:"#141D2F"}}>
          <ModeSection modeClick = {counterPlus}/>
          {show ? <Container 
          result = {result}
          search = {getSearchValue} 
          bio = {data.bio === null ? ("this profile has no bio") : data.bio}
          bio2 = {data.bio === null ? ("this profile has no bio") : data.bio}
          value={search} 
          click={changeRepos} 
          img = {data.avatar_url} 
          name={data.name} 
          hashtag = {data.login} 
          joined = {format(new Date(data.created_at), 'dd MMM yyyy')} 
          repos = {data.public_repos} 
          followers={data.followers}  
          following = {data.following}
          location = {data.location}
          link = {data.html_url}
          twitter ={data.twitter_username === null ? ("Not Available") : data.twitter_username}
          building = {data.login}
          /> 
          : ""}
          
      </div>

    </MyContext.Provider> 
   
  );
}

export default App;
