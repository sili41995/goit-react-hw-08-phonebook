import sortTypes from 'constants/sortTypes';

const { DESC_SORT_TYPE, ASC_SORT_TYPE } = sortTypes;

const updateSortSearchParams = (searchParams, setSearchParams, key) => {
  const sortSearchParam = searchParams.get(key);
  const deskSortType = sortSearchParam === DESC_SORT_TYPE;
  const updateSortValue = deskSortType ? ASC_SORT_TYPE : DESC_SORT_TYPE;
  searchParams.set(key, updateSortValue);
  setSearchParams(searchParams);
};

export default updateSortSearchParams;
