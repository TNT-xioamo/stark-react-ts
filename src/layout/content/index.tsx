import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { FloatButton, Spin } from 'antd'
// import routes from '@/router'

export default memo(function JMSLayoutContent() {
  return (
    <>
      <main className='app-main'>
      <Suspense fallback={<Spin />}>{renderRoutes()}</Suspense>
      </main>
      <FloatButton.Group trigger="hover">
        <FloatButton />
      </FloatButton.Group>
    </>
  )
})
