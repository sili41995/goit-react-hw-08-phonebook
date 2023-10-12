import constants from 'constants';

function setButtonColor({ btnType }) {
  const { iconBtnType, theme } = constants;

  switch (btnType) {
    case iconBtnType.delete:
      return theme.colors.redBtnColor;

    case iconBtnType.edit:
      return theme.colors.blueBtnColor;

    case iconBtnType.phone:
      return theme.colors.greenBtnColor;

    case iconBtnType.message:
      return theme.colors.yellowBtnColor;

    case iconBtnType.chat:
      return theme.colors.blueBtnColor;

    case iconBtnType.logout:
      return theme.colors.redBtnColor;

    case iconBtnType.accept:
      return theme.colors.greenBtnColor;

    case iconBtnType.cancel:
      return theme.colors.redBtnColor;

    case iconBtnType.deleteTransparent:
      return 'transparent';

    default:
      return theme.colors.lightgreyBtnColor;
  }
}

export default setButtonColor;
