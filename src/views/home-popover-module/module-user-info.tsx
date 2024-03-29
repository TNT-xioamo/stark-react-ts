import React, { memo } from 'react'
import { Tooltip, Avatar, Popover } from 'antd'
import { UserInfo } from './module-style'
import { RxChevronDown, RxBell, RxAvatar } from "react-icons/rx";

export default memo(function JMSUserInfo(props: any) {
  return (
    <>
      <UserInfo className='f-c-s-b sidebar-user-info'>
        <div className='sys-logo f-c-s'>
          <span className='l-s'><img src={props.logo} alt="stark" /></span>
          <Popover arrow={false} ><span className='user-space'><RxChevronDown /></span></Popover>
        </div>
        <div className='index-module_right f-c-s-b'>
          <div className='message flex-center'><Tooltip title="消息中心" overlayStyle={{ fontSize: 12 }}><RxBell /></Tooltip></div>
          <div className='avatar flex-center'><Avatar size={24} icon={<RxAvatar />} /></div>
        </div>
      </UserInfo>
    </>
  )
})
