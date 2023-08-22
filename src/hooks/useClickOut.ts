import * as React from 'react'
import ReactDOM from 'react-dom'

type UseClickOutProps = {
  // domTargetRef: React.MutableRefObject<HTMLElement>[]
  domTargetRef: React.RefObject<HTMLElement>[]
  onClickOut: (event: Event) => void
  eventName?: string
}

/**
 * core func - 判断用户事件目标元素是否在指定元素外
 * @param domTargetRefArr dom-Ref数组
 * @param targetDom 用户事件dom
 * @returns boolean
 */

const isClickDomOutside = (domTargetRefArr: React.MutableRefObject<HTMLElement>[], targetDom: HTMLElement) => {
  for (const domRef of domTargetRefArr) {
    const realDom = ReactDOM.findDOMNode(domRef?.current)
    if (realDom?.contains(targetDom)) return false
  }
  return true
}

/**
 * hook - useClickOut: 用于触发在指定dom外发生用户特定行为的事件
 * @param domTargetRef: 单个dom的Ref 或 dom-Ref数组
 * @param onClickOut: 点出事件
 * @param eventName: 默认click事件
 */

export default function useClickOut({ domTargetRef = [], eventName = 'click', onClickOut }: any) {
  const domTargetRefArr = [].concat(domTargetRef)
  React.useEffect(() => {
    const handler = (e: Event) => {
      if (isClickDomOutside(domTargetRefArr, (e?.target as HTMLElement))) {
        onClickOut(e)
      }
    }
    document.addEventListener(eventName, handler)
    return () => document.removeEventListener(eventName, handler)
  }, [])
}
