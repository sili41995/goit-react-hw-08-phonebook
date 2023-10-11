const theme = {
  colors: {
    primaryColor: '#38b6ff',
    primaryLinkColor: '#4d5ae5',
    secondaryLinkColor: '#404bbf',
    primaryFontColor: '#000',
    otherFontColor: '#fff',
    authPageBackgroundColor: 'rgba(46, 47, 66, 0.2)',
    authFormBackgroundColor: '#fcfcfc',
    // #7c7c7c
    // #eee
    // #555
    // #44de6f
    // rgba(137, 137, 137, 0.43)
    // #636363
    // #696969
    // #fff
  },
  shadows: {
    primaryShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    secondaryShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.17)',
  },
  fontWeight: {
    primaryFontWeight: 500,
    secondaryFontWeight: 600,
    otherFontWeight: 400,
  },
  fontSize: {
    primaryFontSize: 15,
    secondaryFontSize: 18,
    otherFontSize: 20,
  },
  padding: {
    paddingContainer: 16,
    paddingAuthForm: 32,
  },
  deskContainerWidth: 1200,
  primaryGap: 20,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
