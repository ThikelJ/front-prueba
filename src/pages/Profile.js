import React, { useEffect, useState } from 'react'
import { getProfile } from '../api/user';
import "./css/Profile.css"

export default function Profile() {

  const token = localStorage.getItem('token');

  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      const response = await getProfile()
      if (response && response.data) {
        setUser(response.data)
      }
    }
    getUser()
  }, [token])

  const handleLogOut = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <div>
      <button className='LogOutButton' type='button' onClick={handleLogOut}>log out</button>
      <h1>Profile</h1>
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>

    </div>
  )
}
