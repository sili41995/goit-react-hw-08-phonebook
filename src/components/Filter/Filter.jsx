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
import { ASC_SORT_TYPE, DESC_SORT_TYPE } from 'constants/sortType';

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
    const deskSortType = sortSearchParam === DESC_SORT_TYPE;
    updateSearchParams[SORT_SP_KEY] = deskSortType
      ? ASC_SORT_TYPE
      : DESC_SORT_TYPE;
    setSearchParams(updateSearchParams);
  };

  const deskSortType = searchParams.get(SORT_SP_KEY) === DESC_SORT_TYPE;

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
        {deskSortType ? <AscIcon /> : <DescIcon />}
      </Button>
    </FilterContainer>
  );
};

export default Filter;
