function setIconFill({ type }) {
  switch (type) {
    case 'delete':
      return '#d3232f';

    case 'edit':
      return '#2681ed';

    case 'phone':
      return '#00c938';

    case 'message':
      return '#ffb422';

    case 'chat':
      return '#2681ed';

    case 'filter':
      return '#555555';

    default:
      return 'none';
  }
}

export default setIconFill;
