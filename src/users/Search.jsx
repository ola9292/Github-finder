import React, {useState, useContext } from 'react'

function Search({searchUsers, clearUsers, show, showAlert} ){

    const [text, setText] = useState('')

   const handleChange=(e)=>{
        setText(e.target.value)
    }
  const onSubmit=(e)=>{
        e.preventDefault()
        if(text===''){
            showAlert('Please type in something', 'light')
        
        }else{
            searchUsers(text)
            setText('')
        }
        
    }

    return(
        <div>
        <form className='form' onSubmit={onSubmit}>
            <input type="text" 
            name="text" 
            placeholder='Search Users...' 
            value={text} 
            onChange={handleChange}/>
            <input type="submit" className='btn btn-dark btn-block' value="Search"/>
        </form>
        {show ?
         <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>:null}
       
      </div>
    )
}
export default Search
