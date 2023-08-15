const sortContactsByName = (contacts, ascSort) =>
  [...contacts].sort(({ name: prevContact }, { name: nextContact }) =>
    ascSort
      ? prevContact.localeCompare(nextContact)
      : nextContact.localeCompare(prevContact)
  );

export default sortContactsByName;
