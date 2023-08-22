import React, { memo, Suspense } from 'react'
import { Spin } from 'antd'
// import { Outlet } from 'react-router-dom'
import { RouterGurad } from '@/hooks/userRouterGurad'
import routes from '@/router'

export default memo(function JMSLayoutMain() {
  return (
    <>
      {/* <Outlet /> */}
      <Suspense fallback={<Spin />}>
        { RouterGurad(routes) }
      </Suspense>
    </>
  )
})
