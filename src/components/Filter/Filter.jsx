import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  Button,
  FilterContainer,
  Input,
  DescIcon,
  AscIcon,
  FilterIcon,
} from './Filter.styled';
import { FILTER_SP_KEY, SORT_SP_KEY } from 'constants/searhParamsKey';
import makeFocus from 'utils/makeFoces';
import { ASC, DESC } from 'constants/sortType';

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();

  const filter = searchParams.get(FILTER_SP_KEY) ?? '';

  useEffect(() => {
    if (showFilter) {
      makeFocus(inputRef.current);
    }
  }, [showFilter]);

  useEffect(() => {
    if (filter) {
      setShowFilter(true);
    }
  }, [filter]);

  const updateFilterSearchParams = (e) => {
    const updateSearchParams = {};
    const { value } = e.target;
    const sortSearchParam = searchParams.get(SORT_SP_KEY);
    if (sortSearchParam) {
      updateSearchParams[SORT_SP_KEY] = sortSearchParam;
    }
    if (value) {
      updateSearchParams[FILTER_SP_KEY] = value;
    }
    setSearchParams(updateSearchParams);
  };

  const handleFilterBtnClick = () => {
    const updateSearchParams = {};
    const sortSearchParam = searchParams.get(SORT_SP_KEY);
    if (sortSearchParam) {
      updateSearchParams[SORT_SP_KEY] = sortSearchParam;
    }
    setShowFilter((showFilter) => !showFilter);
    setSearchParams(updateSearchParams);
  };

  const updateSortSearchParams = () => {
    const updateSearchParams = {};
    const filterSearchParam = searchParams.get(FILTER_SP_KEY);
    if (filterSearchParam) {
      updateSearchParams[FILTER_SP_KEY] = filterSearchParam;
    }
    const sortSearchParam = searchParams.get(SORT_SP_KEY);
    if (sortSearchParam === ASC) {
      updateSearchParams[SORT_SP_KEY] = DESC;
    }
    updateSearchParams[SORT_SP_KEY] = ASC;
    setSearchParams(updateSearchParams);
  };

  const ascSort = Boolean(searchParams.get(SORT_SP_KEY));

  return (
    <FilterContainer>
      {showFilter && (
        <Input
          ref={inputRef}
          type="text"
          value={filter}
          onChange={updateFilterSearchParams}
        />
      )}
      <Button onClick={handleFilterBtnClick}>
        <FilterIcon />
      </Button>
      <Button onClick={updateSortSearchParams}>
        {ascSort ? <DescIcon /> : <AscIcon />}
      </Button>
    </FilterContainer>
  );
};

export default Filter;
