import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './users/Users'
import User from './users/User'
import Search from './users/Search'
import NotFound from './components/pages/NotFound'
import Alert from './components/layout/Alert'
import { Routes, Route } from "react-router-dom"





function App(){
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)


  let githubClientId;
  let githubClientSecret;

  if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    githubClientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET
  }else{
    githubClientId =process.env.GITHUB_CLIENT_ID
    githubClientSecret=process.env.GITHUB_CLIENT_SECRET
  }

   //search github users
   const searchUsers = async(text)=>{
    setLoading(true)
   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
      {githubClientId}&client_secret=${githubClientSecret}`)
      setUsers(res.data.items)
      setLoading(false)
  }

  
  //get user
const getUser = async (userName)=>{
    setLoading(true)
   const res = await axios.get(`https://api.github.com/users/${userName}?client_id=$
      {githubClientId}&client_secret=${githubClientSecret}`)
      setUser(res.data)
      setLoading(false)
  }

   //get repos
const getUserRepos = async (userName)=>{
    setLoading(true)
   const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=$
      {githubClientId}&client_secret=${githubClientSecret}`)
      setRepos(res.data)
      setLoading(false)
  }

  
  //clear users
 const clearUsers =()=>{
    setUsers([])
    setLoading(false)
  }

   //set alert
   const showAlert =(msg,type)=>{
    setAlert(
      {
        msg:msg,
        type:type
      }
    )
    setTimeout(()=>{
     return setAlert(null)
    },5000)
  }
  return(
    <div className="App">
     

    <Navbar title="Github Finder" icon="fa-brands fa-github"/>
      <div className="container">
      <Alert alert={alert}/>

     
      <Routes>
      <Route path="/" element={ <>
      
        <Search searchUsers={searchUsers} 
              clearUsers={clearUsers} 
              show={users.length>0?true:false}
              showAlert={showAlert}/>

      <Users 
        loading={loading}  
        users={users}
        />
      </> } />
      
      <Route path="user/:login" element={ <User  
                                          getUser={getUser} 
                                          getUserRepos={getUserRepos}
                                          user={user} 
                                          repos={repos}
                                          loading={loading}/> } />
     <Route path="*" element={ <NotFound/> } />
    </Routes>
      </div>
      
  </div>
  )
  
}
export default App
