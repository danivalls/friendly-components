import React from 'react';
import { useLocation } from 'react-router';
import { docsRoutes } from 'routes/public';
import { CategoryHeader, MenuItemsList } from './Menu.styled';
import MenuItem from './MenuItem';

const Menu = () => {
  const location = useLocation();

  const itemsSortedByCategory = docsRoutes
    .filter(({ label }) => label)
    .reduce((mappedCategories, item) => {
      const { category, label, path } = item;
      const active = path
        ? location.pathname.split('/').pop() === path
        : location.pathname === '/docs';
      const menuItem = { label, path, active };

      if (mappedCategories[category]) {
        return {
          ...mappedCategories,
          [category]: [...mappedCategories[category], menuItem]
        };
      }

      return { ...mappedCategories, [category]: [menuItem] };
    }, {});

  return (
    <MenuItemsList>
      {Object.entries(itemsSortedByCategory).map(([category, items]) => (
        <React.Fragment key={category}>
          <CategoryHeader>{category}</CategoryHeader>
          {items.map(({ path, label, active }) => (
            <MenuItem key={path} label={label} to={path} active={active} />
          ))}
        </React.Fragment>
      ))}
    </MenuItemsList>
  );
};

export default Menu;
