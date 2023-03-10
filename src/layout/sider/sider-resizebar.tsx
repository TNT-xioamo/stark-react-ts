import React, { memo } from 'react'

import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { LeaderAside } from './sider-style'

export default memo(function JMSResizebar() {
  return (
    <LeaderAside>
      <div className='resize-bar-slu flex-center'>
        { <CaretLeftOutlined /> }
      </div>
      {/* <CaretRightOutlined /> */}
    </LeaderAside>
  )
})