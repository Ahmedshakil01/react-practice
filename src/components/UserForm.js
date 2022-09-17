import React, { useState } from 'react'
import PropTypes from 'prop-types'

const UserForm = ({handleSubmitData,btnText}) => {
    const [user, setUser] = useState({username: '', email: ''})
    const {username, email} = user;
    const handleChange = (e) =>{
      const selectedField = e.target.name;
      const selectedValue = e.target.value;
      setUser(pervState=>{
        return {...pervState, [selectedField]:selectedValue}
      }) 
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        handleSubmitData(user);
        setUser({username: '', email: ''});
        
    }
  return (
   <form onSubmit={handleSubmit}>
     <div>
      <label htmlFor='username'>User Name </label>
        <input type="text" id="username" name='username'  value={username} onChange={handleChange} required/>  
      </div>
      <div>
      <label htmlFor='email'>Email </label>
        <input type="text" id="email" name='email'  value={email} onChange={handleChange} required/>  
      </div>
      <button type='submit'>{btnText}</button>
   </form>
  )
}

UserForm.propTypes = {

}

export default UserForm
