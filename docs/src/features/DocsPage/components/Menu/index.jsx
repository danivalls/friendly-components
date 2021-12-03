import PropTypes from 'prop-types'
import React from 'react'
import { CategoryHeader, MenuItemsList } from './Menu.styled'
import MenuItem from './MenuItem'

const Menu = ({ items }) => {
  const itemsSortedByCategory = items.reduce((mappedCategories, item) => {
    const { category, label, to } = item
    if (mappedCategories[category]) {
      return {
        ...mappedCategories,
        [category]: [...mappedCategories[category], { label, to }]
      }
    }

    return { ...mappedCategories, [category]: [{ label, to }] }
  }, {})

  return (
    <MenuItemsList>
      {Object.entries(itemsSortedByCategory).map(([category, items]) => (
        <React.Fragment key={category}>
          <CategoryHeader>{category}</CategoryHeader>
          {items.map(({ to, label }) => (
            <MenuItem key={to} label={label} to={to} />
          ))}
        </React.Fragment>
      ))}
    </MenuItemsList>
  )
}

export default Menu

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      label: PropTypes.string,
      to: PropTypes.string
    })
  ).isRequired
}
