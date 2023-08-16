import { SORT_SP_KEY } from 'constants/searhParamsKey';

const handleFilterBtnClick = (searchParams, setShowFilter, setSearchParams) => {
  const updateSearchParams = {};
  const sortSearchParam = searchParams.get(SORT_SP_KEY);
  if (sortSearchParam) {
    updateSearchParams[SORT_SP_KEY] = sortSearchParam;
  }
  setShowFilter((showFilter) => !showFilter);
  setSearchParams(updateSearchParams);
};

export default handleFilterBtnClick;
