import { FILTER_SP_KEY, SORT_SP_KEY } from 'constants/searchParamsKey';

const updateFilterSearchParams = (value, searchParams, setSearchParams) => {
  const updateSearchParams = {};
  const sortSearchParam = searchParams.get(SORT_SP_KEY);
  if (sortSearchParam) {
    updateSearchParams[SORT_SP_KEY] = sortSearchParam;
  }
  if (value) {
    updateSearchParams[FILTER_SP_KEY] = value;
  }
  setSearchParams(updateSearchParams);
};

export default updateFilterSearchParams;
