import React, { memo } from 'react'
import { Tooltip, Avatar } from 'antd'
import { UserInfo } from './module-style'
import { BellOutlined, UserOutlined } from '@ant-design/icons'

export default memo(function JMSUserInfo(props: any) {  
  return (
    <>
      <UserInfo className='f-c-s-b sidebar-user-info'>
        <div className='sys-logo'>
          <span className='l-s'><img src={props.logo} alt="" /></span>
        </div>
        <div className='index-module_right f-c-s-b'>
          <div >
            <Tooltip title="消息中心" overlayStyle={{ fontSize: 12 }}>
              <BellOutlined />
            </Tooltip>
          </div>
          <div><Avatar size={24} icon={<UserOutlined />} /></div>
        </div>
      </UserInfo>
    </>
  )
})
