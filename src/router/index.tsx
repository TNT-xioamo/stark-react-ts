import { lazy } from 'react'
// import { RouteObject } from 'react-router-dom'

const JMSHomePage = lazy(() => import('@/views/homePage'))


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
  // { path: '/main',  auth: false, component: ( <JMSHomePage />), children: [] },
]

export default routes