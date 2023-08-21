import React, { memo, Suspense } from 'react'
import { Spin } from 'antd'
import JMSLayoutMain from '@/views/main'

export default memo(function JMSLayoutContent() {
  return (
    <>
      <main className='app-main'>
        <Suspense fallback={<Spin />}>
          <JMSLayoutMain />
        </Suspense>
      </main>
    </>
  )
})
