import { useSearchParams } from 'react-router-dom';
import { BsSortAlphaDown } from 'react-icons/bs';
import { BsSortAlphaDownAlt } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import { FilterContainer, Input } from './Filter.styled';
import { FILTER_SP_KEY, SORT_SP_KEY } from 'constants/searchParamsKey';
import makeFocus from 'utils/makeFocus';
import { DESC_SORT_TYPE } from 'constants/sortType';
import updateSortSearchParams from 'utils/updateSortSearchParams';
import updateFilterSearchParams from 'utils/updateFilterSearchParams';
import handleFilterBtnClick from 'utils/handleFilterBtnClick';
import makeBlur from 'utils/makeBlur';
import IconButton from 'components/IconButton';

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

  const onSortBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
    updateSortSearchParams(searchParams, setSearchParams);
  };

  const onFilterChange = (e) => {
    const { value } = e.target;
    updateFilterSearchParams(value, searchParams, setSearchParams);
  };

  const onFilterBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
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
      <IconButton
        btnType="filter"
        iconSize={28}
        width={44}
        onBtnClick={onFilterBtnClick}
      >
        <FiFilter />
      </IconButton>
      <IconButton
        btnType="filter"
        iconSize={28}
        width={44}
        onBtnClick={onSortBtnClick}
      >
        {deskSortType ? <BsSortAlphaDown /> : <BsSortAlphaDownAlt />}
      </IconButton>
    </FilterContainer>
  );
};

export default Filter;
