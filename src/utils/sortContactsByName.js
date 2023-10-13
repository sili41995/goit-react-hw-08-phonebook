import { sortTypes } from 'constants';

const sortContactsByName = (contacts, sortType) => {
  return contacts.toSorted(({ name: prevContact }, { name: nextContact }) =>
    sortType === sortTypes.DESC_SORT_TYPE
      ? nextContact.localeCompare(prevContact)
      : prevContact.localeCompare(nextContact)
  );
};

export default sortContactsByName;
