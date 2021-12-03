import PropTypes from 'prop-types'
import React from 'react'
import { BurgerContainer, Container, DrawerBody, Mask } from './Drawer.styled'
import MenuBurger from './MenuBurger'

const Drawer = ({ visible, locked, toggleVisibility }) => {
  return (
    <Container locked={locked}>
      {!locked && (
        <BurgerContainer active={visible}>
          <MenuBurger onClick={toggleVisibility} active={visible} />
        </BurgerContainer>
      )}
      <DrawerBody visible={visible || locked} locked={locked} width='500px'>
        This is a drawer
      </DrawerBody>
      <Mask visible={visible && !locked} onClick={toggleVisibility} />
    </Container>
  )
}

export default Drawer

Drawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  locked: PropTypes.bool,
  toggleVisibility: PropTypes.func.isRequired
}

Drawer.defaultProps = {
  locked: false
}
