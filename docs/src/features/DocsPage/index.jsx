import { useMinWidth } from 'hooks/useMinWidth';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { docsRoutes } from 'routes/public';
import Drawer from './components/Drawer';
import Topbar from './components/Topbar';
import { Content, DocsLayout } from './Layout.styled';

const Layout = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const triggerResponsive = useMinWidth(900);
  const { pathname } = useLocation();
  const contentRef = useRef();

  useLayoutEffect(() => {
    setMenuVisible(false);
    contentRef.current.scrollTo(0, 0);
  }, [pathname]);

  const toggleMenuVisibility = () =>
    setMenuVisible((visibility) => !visibility);

  const routing = useRoutes(docsRoutes);

  return (
    <DocsLayout>
      <Topbar />

      <Content ref={contentRef}>{routing}</Content>

      <Drawer
        visible={menuVisible}
        toggleVisibility={toggleMenuVisibility}
        locked={!triggerResponsive}
      />
    </DocsLayout>
  );
};

export default Layout;
