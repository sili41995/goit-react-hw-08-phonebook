import { useEffect, useRef, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import styled from '@emotion/styled';
import {
  Button,
  FilterContainer,
  Input,
  DescIcon,
  AscIcon,
} from './Filter.styled';
import { useSearchParams } from 'react-router-dom';
import SEARCH_PARAMS_KEY from 'service/searh-params-key';

const FilterIcon = styled(FiFilter)`
  width: 100%;
  height: 100%;
  stroke: #555555;
`;

const Filter = () => {
  const [ascSort, setAscSort] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();

  const filter = searchParams.get(SEARCH_PARAMS_KEY) ?? '';

  useEffect(() => {
    if (showFilter) {
      inputRef.current.focus();
    }
  }, [showFilter]);

  useEffect(() => {
    if (filter) {
      setShowFilter(true);
    }
  }, [filter]);

  const updateQueryString = (e) => {
    setSearchParams(
      e.target.value ? { [SEARCH_PARAMS_KEY]: e.target.value } : {}
    );
  };

  const handleFilterBtnClick = () => {
    setShowFilter((showFilter) => !showFilter);
  };

  const handleSortBtnClick = (e) => {
    setAscSort((prevState) => !prevState);
    e.currentTarget.blur();
  };

  return (
    <FilterContainer>
      {showFilter && (
        <Input
          ref={inputRef}
          type="text"
          value={filter}
          onChange={(e) => {
            updateQueryString(e);
          }}
        />
      )}
      <Button
        onClick={() => {
          handleFilterBtnClick();
        }}
      >
        <FilterIcon />
      </Button>
      <Button
        onClick={(e) => {
          handleSortBtnClick(e);
        }}
      >
        {ascSort ? <DescIcon /> : <AscIcon />}
      </Button>
    </FilterContainer>
  );
};

export default Filter;
