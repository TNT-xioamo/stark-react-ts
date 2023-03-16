import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SET_SETTINGS_MENU } from '@/store/reducers/settings'

import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { LeaderAside } from './sider-style'


export default memo(function JMSResizebar() {
  const { settings }: any = useSelector(state => state)
  const dispatch = useDispatch()

  const handleSdise = () => {
    // dispatch(SET_SETTINGS_MENU)
    
  }
  return (
    <LeaderAside>
      <div className='resize-bar-slu flex-center' onClick={ () => handleSdise() }>{ settings.menu ? <CaretLeftOutlined /> : <CaretRightOutlined /> }</div>
    </LeaderAside>
  )
})