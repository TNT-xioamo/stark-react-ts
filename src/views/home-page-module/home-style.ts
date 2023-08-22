import styled from 'styled-components'

export const Wallpaper = styled.div `
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  /* background-image: url(http://imgapi.xl0408.top/index.php?cache=${Math.random()}); */
  filter: opacity(1) blur(0px) grayscale(0) brightness(1);
  /* transform: scale(1.25); */
  background-size: cover;
  background-position: center;
  transition: transform .2s!important;
  background-repeat: no-repeat;
`

export const HomePageMain = styled.div `
  height: 100%;
  .bar-cnt {
    width: 100%;
    position: sticky;
    top: 20px;
    .bar-cnt_inner {
      max-width: 400px;
      background-color: #171717;
      padding: 8px 0;
      border-radius: 10px;
      .bar-item {
        .item-inner {
          width: 30px;
          height: 30px;
          background-color: #fff;
          font-size: 20px;
          border-radius: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .home-mini_bar {
    width: 20vw;
    background-color: #171717;
    height: 10px;
    position: sticky;
    border-radius: 25px;
    cursor: pointer;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    .mini-bar_line {
      width: 20%;
      background-color: #fff;
      height: 2px;
      border-radius: 4px;
      overflow: hidden;
    }
  }
`