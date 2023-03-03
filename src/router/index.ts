import React from 'react'
import { Navigate } from 'react-router-dom'

const JMSAppMain = React.lazy(() => import('@/views/main'))

const routes = [
  { path: '/', exact: true, render: () => Navigate({ to: '/main' }) },
  {
    path: '/main',
    component: JMSAppMain,
    routes: []
  }
]

export default routes