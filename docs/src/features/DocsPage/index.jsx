import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { useMinWidth } from '../../hooks/useMinWidth'
import { docsRoutes } from '../../routes/public'
import Drawer from './components/Drawer'
import Topbar from './components/Topbar'
import { Content, DocsLayout } from './Layout.styled'

const Layout = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const triggerResponsive = useMinWidth(900)

  const toggleMenuVisibility = () => setMenuVisible((visibility) => !visibility)

  const routing = useRoutes(docsRoutes)

  return (
    <DocsLayout>
      <Topbar />

      <Content>{routing}</Content>

      <Drawer
        visible={menuVisible}
        toggleVisibility={toggleMenuVisibility}
        locked={!triggerResponsive}
      />
    </DocsLayout>
  )
}

export default Layout
