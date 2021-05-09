import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'


export const SidebarData = [
{
    title: 'Manage Request',
    path: "#",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    subNav: [
        {
            title: 'View All Services',
            path: "/app/request-service",
        },{
            title: 'Request Services',
            path: "/#",
        },{
            title: 'View All Requested Services',
            path: "#",
        }
    ]
},

{
    title: 'Manage Services',
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
            title: 'Services Provided by Me',
            path: "/#",
        },{
            title: 'View All Requested Services',
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
            title: 'View All Categories',
            path: "/app/categories",
        },{
            title: 'Add a Category',
            path: "/#",
        }
    ]
}


]