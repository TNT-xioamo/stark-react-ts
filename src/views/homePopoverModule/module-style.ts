import styled from 'styled-components'

export const UserInfo = styled.div `
  width: 100%;
  position: sticky;
  .sys-logo {
    cursor: pointer;
    .l-s {
      img {
        width: 105px;
        height: 28px;
      }
    }
    .user-space {
      width: 20px;
      height: 20px;
      display: inline-block;
      transform: translateX(-150%);
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
      margin-left: 8px;
      &:hover {
        cursor: pointer;
        background: var(--sk-yuque-grey-300);
        border-radius: 10px;
      }
    }
  }
`