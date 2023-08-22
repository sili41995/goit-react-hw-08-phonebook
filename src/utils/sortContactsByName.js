import sortTypes from 'constants/sortTypes';

const { DESC_SORT_TYPE } = sortTypes;

const sortContactsByName = (contacts, sortType) =>
  [...contacts].sort(({ name: prevContact }, { name: nextContact }) =>
    sortType === DESC_SORT_TYPE
      ? nextContact.localeCompare(prevContact)
      : prevContact.localeCompare(nextContact)
  );

export default sortContactsByName;
