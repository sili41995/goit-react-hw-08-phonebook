import constants from 'constants';

function setIconFill({ btnType }) {
  const { iconBtnType, theme } = constants;

  switch (btnType) {
    case iconBtnType.delete:
      return theme.colors.redIconColor;

    case iconBtnType.edit:
      return theme.colors.blueIconColor;

    case iconBtnType.phone:
      return theme.colors.greenIconColor;

    case iconBtnType.message:
      return theme.colors.yellowIconColor;

    case iconBtnType.chat:
      return theme.colors.blueIconColor;

    case iconBtnType.logout:
      return theme.colors.redIconColor;

    case iconBtnType.accept:
      return theme.colors.greenIconColor;

    case iconBtnType.cancel:
      return theme.colors.redIconColor;

    case iconBtnType.deleteTransparent:
      return theme.colors.redIconColor;

    case iconBtnType.toggleShowPassword:
      return theme.colors.primaryLinkColor;

    default:
      return theme.colors.lightgreyIconColor;
  }
}

export default setIconFill;
