import React, { memo, Suspense } from 'react'
import { Spin } from 'antd'
import { Outlet } from 'react-router-dom'


export default memo(function JMSLayoutMain() {
  return (
    <>
      123123
      <Suspense fallback={<Spin />}><Outlet /></Suspense>
    </>
  )
})
