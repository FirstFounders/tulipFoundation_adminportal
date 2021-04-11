// Teams
// Partners
// Events
// Blog
// Project
// Projects

// //get
// Organization Aliiance
// Volunteers
// Training

import { FaHome, FaBlog } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

import Home from '../../pages/Home';
import Events from '../../pages/Events';
import Blog from '../../pages/Blogs';
import Teams from '../../pages/Teams';
import Projects from '../../pages/Projects';
//import Error from '../../pages/Error';
import Login from '../../pages/Login';

export const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    icon: <FaHome />,
  },
  {
    path: '/events',
    component: Events,
    name: 'Events',
    icon: <MdEvent />,
  },
  {
    path: '/blog',
    component: Blog,
    name: 'Blog',
    icon: <FaBlog />,
  },
  {
    path: '/teams',
    component: Teams,
    name: 'Teams',
    icon: <RiTeamFill />,
  },
  {
    path: '/projects',
    component: Projects,
    name: 'Projects',
    icon: <AiOutlineFundProjectionScreen />,
  },
];

export const openroute = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    icon: '',
  },
  // {
  //   path: '',
  //   component: Error,
  //   name: 'Error',
  //   icon: 'Error',
  // },
];
