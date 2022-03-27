import { Icon, iconNames, Input } from 'friendly-components';
import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useState } from 'react';
import {
  FilterResultsText,
  IconsShowcase,
  IconWrapper,
  SearchContainer
} from './IconsList.styled';

const IconsList = () => {
  const [filter, setFilter] = useState('');
  const [filteredIcons, setFilteredIcons] = useState(iconNames);

  const copyIconNameToClipboard = useCallback((iconName) => {
    if (navigator.clipboard) navigator.clipboard.writeText(iconName);
  }, []);

  const filterIcons = useCallback(
    debounce((filter) => {
      setFilteredIcons(
        filter
          ? iconNames.filter((name) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
          : iconNames
      );
    }, 500),
    []
  );

  useEffect(() => {
    filterIcons(filter);
  }, [filter, filterIcons]);

  return (
    <>
      <SearchContainer>
        <Input
          icon="Search"
          value={filter}
          onChange={setFilter}
          placeholder="Search icon"
        />
        <FilterResultsText>
          {!filter
            ? 'Showing all icons'
            : filteredIcons.length
            ? `Showing ${filteredIcons.length} icons`
            : 'No icons found'}
        </FilterResultsText>
      </SearchContainer>
      <IconsShowcase>
        {filteredIcons.map((iconName) => (
          <IconWrapper
            key={iconName}
            onClick={() => copyIconNameToClipboard(iconName)}
          >
            <Icon name={iconName} size="32px" />
            {iconName}
          </IconWrapper>
        ))}
      </IconsShowcase>
    </>
  );
};

export default IconsList;
