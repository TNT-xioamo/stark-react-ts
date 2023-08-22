import React, { memo, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SET_DESKTOP_BAR } from '@/store/reducers'
import useClickOut from '@/hooks/useClickOut'

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


  return (
    <>
     <div className='home-bar'>
      { 
        !showBar ? <div className='home-mini_bar flex-center' onClick={() => handle_mini_bar()}><div className='mini-bar_line'></div>
          </div> : <div ref={popoverRef} className='bar-cnt'>qweqweqw</div>
      }
     </div>
    </>
  )
})
