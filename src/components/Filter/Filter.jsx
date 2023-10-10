import { useSearchParams } from 'react-router-dom';
import { BsSortAlphaDown } from 'react-icons/bs';
import { BsSortAlphaDownAlt } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import { FilterContainer } from './Filter.styled';
import utils from 'utils';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import constants from 'constants';

const { sortTypes, searchParamsKeys, formType, iconBtnType } = constants;
const { makeBlur, updateSortSearchParams } = utils;

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();
  const { DESC_SORT_TYPE } = sortTypes;
  const { FILTER_SP_KEY, SORT_SP_KEY } = searchParamsKeys;
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const deskSortType = searchParams.get(SORT_SP_KEY) === DESC_SORT_TYPE;

  useEffect(() => {
    if (!showFilter) {
      searchParams.delete(FILTER_SP_KEY);
      setSearchParams(searchParams);
    }
  }, [FILTER_SP_KEY, searchParams, setSearchParams, showFilter]);

  useEffect(() => {
    if (filter) {
      setShowFilter(true);
    }
  }, [filter]);

  const onSortBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
    updateSortSearchParams(searchParams, setSearchParams, SORT_SP_KEY);
  };

  const onFilterChange = (e) => {
    const { value } = e.target;
    value
      ? searchParams.set(FILTER_SP_KEY, value)
      : searchParams.delete(FILTER_SP_KEY);
    setSearchParams(searchParams);
  };

  const onFilterBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
    setShowFilter((showFilter) => !showFilter);
  };

  return (
    <FilterContainer>
      {showFilter && (
        <Input
          ref={inputRef}
          type="text"
          value={filter}
          onChange={onFilterChange}
          inputType={formType.filter}
          autoFocus
        />
      )}
      <IconButton
        btnType={iconBtnType.filter}
        iconSize={28}
        width={44}
        onBtnClick={onFilterBtnClick}
      >
        <FiFilter />
      </IconButton>
      <IconButton
        btnType={iconBtnType.filter}
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
