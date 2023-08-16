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
import { DESC_SORT_TYPE } from 'constants/sortType';
import updateSortSearchParams from 'utils/updateSortSearchParams';
import updateFilterSearchParams from 'utils/updateFilterSearchParams';
import handleFilterBtnClick from 'utils/handleFilterBtnClick';

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const deskSortType = searchParams.get(SORT_SP_KEY) === DESC_SORT_TYPE;

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

  const onSortBtnClick = () => {
    updateSortSearchParams(searchParams, setSearchParams);
  };

  const onFilterChange = (e) => {
    const { value } = e.target;
    console.log(value);
    updateFilterSearchParams(value, searchParams, setSearchParams);
  };

  const onFilterBtnClick = () => {
    handleFilterBtnClick(searchParams, setShowFilter, setSearchParams);
  };

  return (
    <FilterContainer>
      {showFilter && (
        <Input
          ref={inputRef}
          type="text"
          value={filter}
          onChange={onFilterChange}
        />
      )}
      <Button onClick={onFilterBtnClick}>
        <FilterIcon />
      </Button>
      <Button onClick={onSortBtnClick}>
        {deskSortType ? <AscIcon /> : <DescIcon />}
      </Button>
    </FilterContainer>
  );
};

export default Filter;
