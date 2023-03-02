import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import routes from '@/router'

import { Spin } from 'antd'

export default memo(function AppWrapper () {

  return (
    <>
      <Suspense fallback={<Spin />}>{renderRoutes(routes)}</Suspense>
    </>
  )
})