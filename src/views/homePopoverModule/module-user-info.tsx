import React, { memo } from 'react'
import { Tooltip, Avatar } from 'antd'
import { UserInfo } from './module-style'
import { BellOutlined, UserOutlined, DownOutlined } from '@ant-design/icons'

export default memo(function JMSUserInfo(props: any) {
  return (
    <>
      <UserInfo className='f-c-s-b sidebar-user-info'>
        <div className='sys-logo f-c-s'>
          <span className='l-s'><img src={props.logo} alt="stark" /></span>
          <span className='user-space'><DownOutlined /></span> 
        </div>
        <div className='index-module_right f-c-s-b'>
          <div className='message flex-center'><Tooltip title="消息中心" overlayStyle={{ fontSize: 12 }}><BellOutlined /></Tooltip></div>
          <div className='avatar flex-center'><Avatar size={24} icon={<UserOutlined />} /></div>
        </div>
      </UserInfo>
    </>
  )
})
