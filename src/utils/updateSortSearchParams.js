import searchParamsKeys from 'constants/searchParamsKeys';
import sortTypes from 'constants/sortTypes';

const { FILTER_SP_KEY, SORT_SP_KEY } = searchParamsKeys;
const { DESC_SORT_TYPE, ASC_SORT_TYPE } = sortTypes;

const updateSortSearchParams = (searchParams, setSearchParams) => {
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

export default updateSortSearchParams;
