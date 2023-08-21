import React, { memo } from 'react'
import HomeMiniBar from './home-mini-bar'
import { HomePageMain } from './home-style'

export default memo(function JMSHomePage() {
  return (
    <>
      <HomePageMain>
        <HomeMiniBar />
      </HomePageMain>
    </>
  )
})
