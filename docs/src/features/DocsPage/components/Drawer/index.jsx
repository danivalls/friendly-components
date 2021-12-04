import PropTypes from 'prop-types'
import React from 'react'
import Menu from '../Menu'
import MenuBurger from '../MenuBurger'
import { BurgerContainer, Container, DrawerBody, Mask } from './Drawer.styled'

const Drawer = ({ visible, locked, toggleVisibility }) => {
  return (
    <Container locked={locked}>
      {!locked && (
        <BurgerContainer active={visible}>
          <MenuBurger onClick={toggleVisibility} active={visible} />
        </BurgerContainer>
      )}
      <DrawerBody visible={visible || locked} locked={locked} width='500px'>
        <Menu
          items={[
            {
              label: 'Item 1',
              to: 'Potato',
              category: 'Category 1',
              active: false
            },
            {
              label: 'Item 2',
              to: 'Potato2',
              category: 'Category 1',
              active: true
            },
            {
              label: 'Item 3',
              to: 'Potato3',
              category: 'Category 1',
              active: false
            },
            {
              label: 'Item 4',
              to: 'Potato4',
              category: 'Category 2',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potato5',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potato5d',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potatso5',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potatodf5',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potatofdf5',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potato5de',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potatoasd5',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potadfsto5',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potatosdf5',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potato235',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potatosdf5e',
              category: 'Category 5',
              active: false
            },
            {
              label: 'Item 5',
              to: 'Potatosdfrt5',
              category: 'Category 5',
              active: false
            }
          ]}
        />
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
