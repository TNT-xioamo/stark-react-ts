import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SET_DESKTOP_BAR } from '@/store/reducers'

export default memo(function HomeMiniBar() {
  const upDateBar = useDispatch()
  const { showBar } = useSelector((state: any) => state?.desktop)

  const handle_mini_bar = () => {
    console.log(showBar)
    upDateBar(SET_DESKTOP_BAR(true))
  }


  return (
    <>
     <div className='home-bar'>
        <div className='home-mini_bar flex-center' onClick={() => handle_mini_bar()}>
          <div className='mini-bar_line'></div>
        </div>
        { !showBar ? <div className='bar-cnt'>qweqweqw</div> : void 0 }
     </div>
    </>
  )
})
