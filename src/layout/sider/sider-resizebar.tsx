import React, { memo } from 'react'

import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { LeaderAside } from './sider-style'

export default memo(function JMSResizebar() {
  return (
    <LeaderAside>
      { <CaretLeftOutlined /> }
      {/* <CaretRightOutlined /> */}
    </LeaderAside>
  )
})