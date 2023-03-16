
import React, { Component } from 'react'
import { Link } from "react-router-dom";
function UserItem({user}){
  const {id, login, avatar_url, html_url} = user
  return(
    <div className='card text-center'>
        <img src={avatar_url} alt="" className='round-img' style={{width:'60px'}}/>
        <h3>{login}</h3>
        <div>
            {/* <a href={html_url} className="btn btn-dark btn-sm my-1">more</a> */}
            <Link className="btn btn-dark btn-sm my-1" to={`user/${login}`}>more</Link>
        </div>
      </div>
    )

}


export default UserItem
