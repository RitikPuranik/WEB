import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>Signup
        <Link to='/Login'>
            <button>Login</button>
        </Link>
    </div>
  )
}

export default Signup