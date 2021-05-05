import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';




function Dashboard() {

    const { logout } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

    const handleLogout = () => {
        setError('')

        try {
            logout()
            history.push('/users/sign-in')

        } catch {
            setError('Could not log out')
        }

    }


    return (
        <div>
            <h2>Welcome to FindMe</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard

