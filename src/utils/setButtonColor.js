import constants from 'constants';

function setButtonColor({ btnType }) {
  const { iconBtnType } = constants;

  switch (btnType) {
    case iconBtnType.delete:
      return '#ff9192';

    case iconBtnType.edit:
      return '#7fd1ff';

    case iconBtnType.phone:
      return '#89f2a6';

    case iconBtnType.message:
      return '#f2e189';

    case iconBtnType.chat:
      return '#7fd1ff';

    case iconBtnType.filter:
      return '#d9d9d9';

    case iconBtnType.logout:
      return '#ff9192';

    case iconBtnType.accept:
      return '#89f2a6';

    case iconBtnType.cancel:
      return '#ff9192';

    case iconBtnType.deleteTransparent:
      return 'transparent';

    default:
      return 'grey';
  }
}

export default setButtonColor;
