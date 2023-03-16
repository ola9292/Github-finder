// import React,{useState, useEffect} from "react";
// import axios from 'axios'

// const Context = React.createContext()

// function ContextProvider({children}){
//     const [users, setUsers] = useState([])
//     const [user, setUser] = useState({})
//     const [repos, setRepos] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [alert, setAlert] = useState(null)
  
//      //search github users
//      const searchUsers = async(text)=>{
//       setLoading(true)
//      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
//         {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
//         {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//         setUsers(res.data.items)
//         setLoading(false)
//     }
  
    
//     //get user
//   const getUser = async (userName)=>{
//       setLoading(true)
//      const res = await axios.get(`https://api.github.com/users/${userName}?client_id=$
//         {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
//         {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//         setUser(res.data)
//         setLoading(false)
//     }
  
//      //get repos
//   const getUserRepos = async (userName)=>{
//       setLoading(true)
//      const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=$
//         {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
//         {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//         setRepos(res.data)
//         setLoading(false)
//     }
  
    
//     //clear users
//    const clearUsers =()=>{
//       setUsers([])
//       setLoading(false)
//     }
  
//      //set alert
//      const showAlert =(msg,type)=>{
//       setAlert(
//         {
//           msg:msg,
//           type:type
//         }
//       )
//       setTimeout(()=>{
//        return setAlert(null)
//       },5000)
//     }
//     return(
//        <Context.Provider value={{users, user, repos, loading, alert, searchUsers, getUser, getUserRepos, clearUsers, showAlert }}>
//             {children}
//        </Context.Provider>
//     )
// }

// export { Context, ContextProvider}