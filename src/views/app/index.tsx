import React, { memo, Suspense } from 'react'

import { Spin } from 'antd'

import JMSLayout from ''

export default memo(function AppWrapper () {

  return (
    <>
      <Suspense fallback={<Spin />}>
        <JMSLayout />
      </Suspense>
    </>
  )
})