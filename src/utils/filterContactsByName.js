const filterContactsByName = (contacts, filter) =>
  filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

export default filterContactsByName;
