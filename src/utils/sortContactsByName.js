import constants from 'constants';

const sortContactsByName = (contacts, sortType) => {
  const { sortTypes } = constants;

  return contacts.toSorted(({ name: prevContact }, { name: nextContact }) =>
    sortType === sortTypes.DESC_SORT_TYPE
      ? nextContact.localeCompare(prevContact)
      : prevContact.localeCompare(nextContact)
  );
};

export default sortContactsByName;
