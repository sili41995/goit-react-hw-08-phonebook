function setButtonColor({ btnType }) {
  switch (btnType) {
    case 'delete':
      return '#ff9192';

    case 'edit':
      return '#7fd1ff';

    case 'phone':
      return '#89f2a6';

    case 'message':
      return '#f2e189';

    case 'chat':
      return '#7fd1ff';

    case 'filter':
      return '#d9d9d9';

    case 'logout':
      return '#ff9192';

    case 'accept':
      return '#89f2a6';

    case 'cancel':
      return '#ff9192';

    default:
      return 'grey';
  }
}

export default setButtonColor;
