import constants from 'constants';

const updateSortSearchParams = (searchParams, setSearchParams, key) => {
  const { sortTypes } = constants;
  const sortSearchParam = searchParams.get(key);
  const deskSortType = sortSearchParam === sortTypes.DESC_SORT_TYPE;
  const updateSortValue = deskSortType
    ? sortTypes.ASC_SORT_TYPE
    : sortTypes.DESC_SORT_TYPE;
  searchParams.set(key, updateSortValue);
  setSearchParams(searchParams);
};

export default updateSortSearchParams;
