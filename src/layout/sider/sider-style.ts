import styled from 'styled-components'

export const LeaderAside = styled.div `
  position: absolute;
  top: 183px;
  /* left: ${(props: any) => (props.style?.left)}px; */
  left: auto;
  right: 0;
  transform: translateX(50%);
  cursor: pointer;
  .resize-bar-slu{
    height: 44px;
    width: 14px;
    background-color: var(--sk-white);
    border: 1px solid var(--sk-yuque-grey-4);
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 6%);
    border-radius: 8px;
    line-height: 28px;
    text-align: center;
    z-index: 999;
  }
`
