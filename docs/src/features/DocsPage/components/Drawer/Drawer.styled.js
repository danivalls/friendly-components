import styled from 'styled-components'

const DRAWER_WIDTH = '300px'

export const Container = styled.div`
  position: ${({ locked }) => (locked ? 'relative' : 'fixed')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  grid-area: menu;

  overflow: hidden;
  pointer-events: none;

  z-index: 1000;
`

export const DrawerBody = styled.section`
  position: ${({ locked }) => (locked ? 'unset' : 'fixed')};
  top: 0;
  left: 0;
  bottom: 0;

  background-color: white;
  box-shadow: ${({ locked, visible }) =>
    locked || !visible ? 'none' : '0px 0px 15px 0px rgba(0,0,0,0.5)'};

  transform: translateX(${({ visible }) => (visible ? 0 : '-100%')});

  width: ${DRAWER_WIDTH};
  max-width: 100vw;
  height: 100vh;

  z-index: 1;

  pointer-events: all;
  transition: all 0.2s ease-out;
`

export const BurgerContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ active, theme }) =>
    active
      ? `calc(${DRAWER_WIDTH} + ${theme.spacing.small})`
      : theme.spacing.small};

  display: flex;
  align-items: center;

  height: ${({ theme }) => theme.spacing.xLarge};

  z-index: 2;

  pointer-events: all;
  transition: all 0.2s ease-out;
`

export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: rgba(0, 0, 0, ${({ visible }) => (visible ? 0.25 : 0)});
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};

  transition: all 0.2s;
`
