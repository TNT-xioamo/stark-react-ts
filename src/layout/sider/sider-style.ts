import styled from 'styled-components'

export const LeaderAside = styled.div `
  position: absolute;
  top: 183px;
  left: auto;
  right: 0;
  transform: translateX(50%);
  cursor: pointer;
  z-index: 11;
  .resize-bar-slu{
    height: 44px;
    width: 14px;
    background-color: var(--sk-white);
    border: 1px solid var(--sk-yuque-grey-4);
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 6%);
    border-radius: 8px;
    line-height: 28px;
    text-align: center;
  }
`
export const DragAside = styled.div `
  position: absolute;
  z-index: 16;
  top: 0;
  bottom: 0;
  right: -6px;
  width: 6px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  cursor: col-resize;
  /* background-color: var(--sk-yuque-grey-6); */
  height: 100%;
  &:hover {
    border-left: 2px dashed var(--sk-yuque-grey-400);
  }
  /* ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: var(--sk-yuque-green-1);
    transition: all .2s ease-in-out;
  }
  ::after {
    content: "";
    transition: backgroundcolor .2s ease-in-out;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 6px;
    width: 100%;
    border-right: 1px solid var(--sk-sea-blue-50);
  } */
`