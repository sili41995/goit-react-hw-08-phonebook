import { iconBtnType, theme } from 'constants';

const setIconHoverEffect = (btnType) => {
  switch (btnType) {
    case iconBtnType.clearFilter:
      return;

    default:
      return theme.colors.secondaryColor;
  }
};

export default setIconHoverEffect;
