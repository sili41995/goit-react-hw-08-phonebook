import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import styled from '@emotion/styled';
import { Button, FilterContainer, Input } from './Filter.styled';

const FilterIcon = styled(FiFilter)`
  width: 100%;
  height: 100%;
  stroke: #555555;
`;

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <FilterContainer>
      {showFilter && <Input type="text" />}
      <Button
        onClick={() => {
          setShowFilter((showFilter) => !showFilter);
        }}
      >
        <FilterIcon />
      </Button>
    </FilterContainer>
  );
};

export default Filter;
