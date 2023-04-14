import { lazy } from 'react'
// import { RouteObject } from 'react-router-dom'

const JMSHomePage = lazy(() => import('@/views/homePage'))
const JMSEducation = lazy(() => import('@/views/microservices/education'))
// import JMSEducation from '@/views/microservices/education'

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  auth?: boolean;
}

const routes: RouteObject[] = [
  { path: '/', auth: false, element: <JMSHomePage />,},
  { path: '/vue-quality-education',  auth: false, element: <JMSEducation /> },
  
]

export default routes