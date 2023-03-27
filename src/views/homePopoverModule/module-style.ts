import styled from 'styled-components'

export const UserInfo = styled.div `
  width: 100%;
  position: sticky;
  .sys-logo {
    .l-s {
      img {
        width: 105px;
        height: 28px;
      }
    }
  }
  .index-module_right {
    .message {
      width: 28px;
      height: 28px;
      &:hover {
        cursor: pointer;
        background: var(--sk-yuque-grey-300);
        border-radius: 10px;
      }
    }
    .avatar {
      width: 32px;
      height: 32px;
      padding-left: 8px;
      &:hover {
        cursor: pointer;
        background: var(--sk-yuque-grey-300);
        border-radius: 10px;
      }
    }
  }
`