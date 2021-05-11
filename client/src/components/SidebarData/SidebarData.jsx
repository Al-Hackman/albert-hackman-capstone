import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'


export const SidebarData = [
{
    title: 'My Requests',
    path: "#",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    subNav: [
        {
            title: 'Request Service',
            path: "/app/request-service",
        },{
            title: 'My Requested Services',
            path: "/app/client-request",
        }
    ]
},

{
    title: 'Service Provider',
    path: "#",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    subNav: [
        {
            title: 'Add a Service',
            path: "/app/service-provider",
        },{
            title: 'Requested Services',
            path: "/app/provided-service",
        },{
            title: 'Accepted Services',
            path: "#",
        },{
            title: 'Declined Services',
            path: "#",
        }
    ]
},
{
    title: 'Admin',
    path: "#",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    subNav: [
        {
            title: 'All Categories',
            path: "/app/categories",
        }
    ]
}


]