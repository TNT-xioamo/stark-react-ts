import styled from 'styled-components'

export const Wallpaper = styled.div `
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-image: url(http://imgapi.xl0408.top/index.php?cache=${Math.random()});
  filter: opacity(1) blur(0px) grayscale(0) brightness(1);
  transform: scale(1.25);
  background-size: cover;
  background-position: center;
  transition: transform .2s!important;
  background-repeat: no-repeat;
`