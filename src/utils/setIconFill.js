function setIconFill({ btnType }) {
  switch (btnType) {
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

    case 'logout':
      return '#d3232f';

    case 'accept':
      return '#00c938';

    case 'cancel':
      return '#d3232f';

    default:
      return 'none';
  }
}

export default setIconFill;
