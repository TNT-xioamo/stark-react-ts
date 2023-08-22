import React, { ReactComponentElement, memo, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SiAdobecreativecloud, SiAerlingus, SiAndroidauto, SiArtixlinux, SiAzuredevops, SiBattledotnet } from 'react-icons/si'
import { Tooltip } from 'antd'
import { SET_DESKTOP_BAR } from '@/store/reducers'
import useClickOut from '@/hooks/useClickOut'
import { bar_list } from './bar-data'

export default memo(function HomeMiniBar() {
  const upDateBar = useDispatch()
  const popoverRef = useRef<HTMLDivElement>(null)

  const { showBar } = useSelector((state: any) => state?.desktop)

  useClickOut({
    domTargetRef : [popoverRef],
    onClickOut: (e: Event) => {
      console.log('poker face')
      upDateBar(SET_DESKTOP_BAR(false))
    }
  })

  const handle_mini_bar = () => {
    upDateBar(SET_DESKTOP_BAR(true))
  }

  const handle_open_ai = (value: string) => {
    console.error(value)
  }

  const bar_list_dom = () => {
    const iconlist = [ <SiAdobecreativecloud />, <SiAerlingus />, <SiAndroidauto />, <SiArtixlinux />, <SiAzuredevops />, <SiBattledotnet /> ]
    return bar_list.map((item, index) => {
      return (
        <div key={item?.value} className='bar-item' onClick={() => handle_open_ai(item['value'])}>
          <div className='item-inner flex-center' >
            <Tooltip title={ item.label }>
              { iconlist[index] }
            </Tooltip>
          </div>
        </div>
      )})
  }

  return (
    <>
     <div className='home-bar'>
      {
        !showBar ? <div className='home-mini_bar flex-center' onClick={() => handle_mini_bar()}><div className='mini-bar_line'></div>
          </div> : 
          <div ref={popoverRef} className='bar-cnt'>
            <div className='bar-cnt_inner f-c-s-e'>
              { bar_list_dom() }
            </div>
          </div>
      }
     </div>
    </>
  )
})
