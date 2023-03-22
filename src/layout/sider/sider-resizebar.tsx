import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SET_SETTINGS_MENU } from '@/store/reducers/settings'

import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { LeaderAside } from './sider-style'


export default memo(function JMSResizebar(props) {
  const { collapse, menuSide }: any = useSelector((state: any) => state?.settings)
  const dispatch = useDispatch()

  const handleSdise = () => {
    dispatch(SET_SETTINGS_MENU(collapse))
  }
  // 
  return (
    <LeaderAside>
      <div className='resize-bar-slu flex-center' onClick={ () => handleSdise() }>{ !collapse ? <CaretLeftOutlined /> : <CaretRightOutlined /> }</div>
    </LeaderAside>
  )
})