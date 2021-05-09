import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from '../SidebarData/SidebarData'
import './dashboard.scss'
import { IconContext } from 'react-icons'



function Dashboard() {

    const { logout, thisCurrentUser } = useAuth()
    const [error, setError] = useState('')
    const [sidebar, setSidebar] = useState(false)
    const history = useHistory()


    console.log(thisCurrentUser)

    async function handleLogout() {
        setError('')

        try {
            logout()
            history.push('/users/sign-in')
            // await thisCurrentUser(uid)

        } catch {
            setError('Could not log out')
        }

    }

    const showSidebar = () =>setSidebar(!sidebar)


    return (
        <div>
            <div>
                {/* <h2>Welcome to FindMe</h2> */}
                {/* {useAuth.uid} */}
                {/* <h4>{thisCurrentUser}</h4> */}
                {/* <button onClick={handleLogout}>Logout</button> */}
            </div>
            <IconContext.Provider value={{color:'#fff'}}>
            <div className="navvbar">
                <Link to="#" className="navvbar__menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <nav className={sidebar ? 'navvbar__nav-menu active' : 'navvbar__nav-menu'}>
                <ul className="navvbar__nav-menu-items" onClick={showSidebar}>
                    <li className="navvbar__toggle">
                        <Link to="#" className="navvbar__menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </div>
    )
}

export default Dashboard;

