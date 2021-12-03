import React, { useState } from 'react'
import { useMinWidth } from '../../hooks/useMinWidth'
import Drawer from './components/Drawer'
import Topbar from './components/Topbar'
import { Content, DocsLayout } from './Layout.styled'

const Layout = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const triggerResponsive = useMinWidth(900)

  const toggleMenuVisibility = () => setMenuVisible((visibility) => !visibility)

  return (
    <DocsLayout>
      <Topbar />

      <Content></Content>

      <Drawer
        visible={menuVisible}
        toggleVisibility={toggleMenuVisibility}
        locked={!triggerResponsive}
      />
    </DocsLayout>
  )
}

export default Layout
