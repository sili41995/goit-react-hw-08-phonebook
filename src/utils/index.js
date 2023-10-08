import filterContactsByName from 'utils/filterContactsByName';
import getAvatar from 'utils/getAvatar';
import getContactInfo from 'utils/getContactInfo';
import getPhoneNumber from 'utils/getPhoneNumber';
import getUserInfo from 'utils/getUserInfo';
import isAuthPage from 'utils/isAuthPage';
import isContactsPage from 'utils/isContactsPage';
import makeBlur from 'utils/makeBlur';
import makeFocus from 'utils/makeFocus';
import setAuthPageBackgroundColor from 'utils/setAuthPageBackgroundColor';
import setButtonColor from 'utils/setButtonColor';
import setIconFill from 'utils/setIconFill';
import setInputBorderColor from 'utils/setInputBorderColor';
import setInputBorderRadius from 'utils/setInputBorderRadius';
import setInputFilter from 'utils/setInputFilter';
import setInputFontColor from 'utils/setInputFontColor';
import setInputFontSize from 'utils/setInputFontSize';
import setInputHeight from 'utils/setInputHeight';
import setInputMaxWidth from 'utils/setInputMaxWidth';
import setInputPadding from 'utils/setInputPadding';
import sortContactsByName from 'utils/sortContactsByName';
import toasts from 'utils/toasts';
import updateSortSearchParams from 'utils/updateSortSearchParams';

const utils = {
  filterContactsByName: filterContactsByName,
  getAvatar: getAvatar,
  getContactInfo: getContactInfo,
  getPhoneNumber: getPhoneNumber,
  getUserInfo: getUserInfo,
  isAuthPage: isAuthPage,
  isContactsPage: isContactsPage,
  makeBlur: makeBlur,
  makeFocus: makeFocus,
  setAuthPageBackgroundColor: setAuthPageBackgroundColor,
  setButtonColor: setButtonColor,
  setIconFill: setIconFill,
  setInputBorderColor: setInputBorderColor,
  setInputBorderRadius: setInputBorderRadius,
  setInputFilter: setInputFilter,
  setInputFontColor: setInputFontColor,
  setInputFontSize: setInputFontSize,
  setInputHeight: setInputHeight,
  setInputMaxWidth: setInputMaxWidth,
  setInputPadding: setInputPadding,
  sortContactsByName: sortContactsByName,
  toasts: toasts,
  updateSortSearchParams: updateSortSearchParams,
};

export default utils;
