
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';




export const SidebarData = [
  {
     id:"ram",
    title: 'Company',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
   
     
   
    subNav: [
      { 
        
        className:"flex",
        title: 'About us',
        path: '/about',
        
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Career',
        path: '/careermain',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Blog',
        path: '/blog',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Contact us',
        path: '/contact',
        icon: <IoIcons.IoIosPaper />
      }
    ]
    


  },
  {
    title: 'Services',
    path:"/Service",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'PHP development',
                icon: <IoIcons.IoIosPaper />,
                ClassName: 'sub-nav',
                path:"/PhpDevelopment",
      },

      {
        title: 'WordPress Develoment',
                icon: <IoIcons.IoIosPaper />,
                ClassName: 'sub-nav'
      },
      {
        title: 'Shopify Development',
               icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Web Designing',
               icon: <IoIcons.IoIosPaper />
      }, 
       {
        title: 'Graphic Designing',
               icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Ecommerce Development',
              icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Solution',
       icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'HireDevelopment',
       icon: <IoIcons.IoMdPeople />
  },
 
  {
    title: 'Work',
        icon: <IoIcons.IoMdHelpCircle />
  }
];
