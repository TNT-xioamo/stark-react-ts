import React, { memo, Suspense } from 'react'
import { Spin } from 'antd'
// import routes from '@/router'

export default memo(function JMSLayoutContent() {
  return (
    <>
      <main className='app-main'>
      <Suspense fallback={<Spin />}>
      </Suspense>
      </main>
    </>
  )
})
