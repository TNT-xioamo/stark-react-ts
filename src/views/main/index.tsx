import React, { memo, Suspense } from 'react'
import { Card, Spin } from 'antd'
import { Outlet } from 'react-router-dom'


export default memo(function JMSLayoutContent() {
  return (
    <>
      <Suspense fallback={<Spin />}><Outlet /></Suspense>
    </>
  )
})
